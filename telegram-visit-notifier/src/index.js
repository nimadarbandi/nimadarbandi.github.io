const MAX_PAGE_LENGTH = 500;
const MAX_REFERRER_LENGTH = 253;

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function isAllowedOrigin(request, allowedOrigin) {
  return request.headers.get("Origin") === allowedOrigin;
}

function validPage(page) {
  return typeof page === "string" && page.startsWith("/") && page.length <= MAX_PAGE_LENGTH;
}

function validReferrerHost(referrerHost) {
  return typeof referrerHost === "string" && referrerHost.length <= MAX_REFERRER_LENGTH;
}

function validDetail(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 100;
}

function detailOrUnknown(value) {
  return validDetail(value) ? value : "Unknown";
}

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN;
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return isAllowedOrigin(request, allowedOrigin)
        ? new Response(null, { headers: corsHeaders(allowedOrigin) })
        : new Response("Forbidden", { status: 403 });
    }

    if (request.method !== "POST" || !isAllowedOrigin(request, allowedOrigin)) {
      return new Response("Forbidden", { status: 403 });
    }

    let visit;
    try {
      visit = await request.json();
    } catch (_) {
      return new Response("Invalid JSON", { status: 400, headers: corsHeaders(origin) });
    }

    if (!validPage(visit.page) || !validReferrerHost(visit.referrerHost)) {
      return new Response("Invalid visit", { status: 400, headers: corsHeaders(origin) });
    }

    const details = {
      device: detailOrUnknown(visit.device),
      browser: detailOrUnknown(visit.browser),
      operatingSystem: detailOrUnknown(visit.operatingSystem),
      language: detailOrUnknown(visit.language),
      timeZone: detailOrUnknown(visit.timeZone),
      visitorType: detailOrUnknown(visit.visitorType)
    };
    const timestamp = easternTimestamp(new Date());
    const cf = request.cf || {};
    const location = [cf.city, cf.region, cf.country].filter(Boolean).join(", ") || "Unavailable";
    const message = [
      `Time: ${timestamp}`,
      `From: ${escapeHtml(location)}`,
      `Page: <code>${escapeHtml(visit.page)}</code>`,
      `Referrer: ${escapeHtml(visit.referrerHost || "Direct")}`,
      `Device: ${escapeHtml(details.device)} · ${escapeHtml(details.browser)} · ${escapeHtml(details.operatingSystem)}`,
      `Language: ${escapeHtml(details.language)}`,
      `Time zone: ${escapeHtml(details.timeZone)}`,
      `Visitor: ${escapeHtml(details.visitorType)}`
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
          disable_web_page_preview: true
        })
      }
    );

    if (!telegramResponse.ok) {
      console.error("Telegram notification failed", telegramResponse.status);
      return new Response("Notification failed", { status: 502, headers: corsHeaders(origin) });
    }

    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function easternTimestamp(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
  }).formatToParts(date).reduce((values, part) => {
    values[part.type] = part.value;
    return values;
  }, {});

  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}.${String(date.getMilliseconds()).padStart(3, "0")} ${parts.timeZoneName}`;
}
