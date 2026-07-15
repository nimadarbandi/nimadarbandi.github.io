var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var MAX_PAGE_LENGTH = 500;
var MAX_REFERRER_LENGTH = 253;
function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
__name(corsHeaders, "corsHeaders");
function isAllowedOrigin(request, allowedOrigin) {
  return request.headers.get("Origin") === allowedOrigin;
}
__name(isAllowedOrigin, "isAllowedOrigin");
function validPage(page) {
  return typeof page === "string" && page.startsWith("/") && page.length <= MAX_PAGE_LENGTH;
}
__name(validPage, "validPage");
function validReferrerHost(referrerHost) {
  return typeof referrerHost === "string" && referrerHost.length <= MAX_REFERRER_LENGTH;
}
__name(validReferrerHost, "validReferrerHost");
var index_default = {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN;
    const origin = request.headers.get("Origin");
    if (request.method === "OPTIONS") {
      return isAllowedOrigin(request, allowedOrigin) ? new Response(null, { headers: corsHeaders(allowedOrigin) }) : new Response("Forbidden", { status: 403 });
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
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").replace(".000Z", " UTC");
    const message = [
      "\u{1F514} <b>New website visit</b>",
      `Page: <code>${escapeHtml(visit.page)}</code>`,
      `Referrer: ${escapeHtml(visit.referrerHost || "Direct")}`,
      `Time: ${timestamp}`
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
__name(escapeHtml, "escapeHtml");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
