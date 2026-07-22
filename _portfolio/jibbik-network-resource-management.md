---
title: "JIBBIK: A Compact Device for Managing Shared Internet Access in Companies"
date: 2016-01-08
permalink: /portfolio/jibbik-network-resource-management/
excerpt: "A Raspberry Pi-based appliance that helped organizations combine Internet connections, distribute bandwidth, and manage access from a central interface."
social_image: /images/jibbik-device.jpeg
tags:
  - embedded systems
  - computer networks
  - Raspberry Pi
  - Linux
  - network management
  - edge computing
skills:
  - Embedded Linux
  - Hardware Design
  - Software
  - Device
---

Organizations often depend on several Internet connections, yet managing them can be surprisingly difficult. A few users can consume most of the bandwidth, an outage at one provider can interrupt work, and keeping track of devices, quotas, and connection status can require more network expertise than a small organization has available.

I built **JIBBIK** to make that work simpler. It is a compact network-management appliance that sits transparently between an organization's Internet connections and its local network. From a browser-based interface, an administrator can combine and monitor available connections, set bandwidth distribution and quota policies for users and devices, and understand how Internet capacity is being used—without installing software on employee computers or changing their day-to-day workflow.

<figure>
  <img src="/images/jibbik-network-diagram.jpeg" alt="JIBBIK network diagram showing multiple Internet service providers connected to an organization's local network" />
  <figcaption>JIBBIK sits between multiple Internet providers and the local network, centralizing connectivity and access policies.</figcaption>
</figure>

## One device, a clearer view of the network

JIBBIK was designed for companies that need reliable, manageable Internet access but do not want to maintain a complex collection of networking tools. The platform brought the essential controls together in one place:

- Combining multiple ISP connections with load balancing and automatic failover
- Per-user and per-device upload and download limits
- Automatic detection of new devices, with one-click access management and no per-user authentication required
- Internet-usage quotas, reporting, and historical activity records
- DHCP, DNS, gateway, IP-address, and MAC-address management
- Support for static and dynamically assigned devices
- Website and routing policies, proxy services, and local VPN access
- A live view of online users, bandwidth consumption, and device activity

The result was better use of the Internet capacity an organization had already purchased, with less dependence on any single provider. If one connection failed, traffic could continue through the remaining links with minimal disruption.

## Built from the ground up

JIBBIK was not a repackaged router. I designed and implemented the complete system: the network architecture, embedded software, backend services and database, monitoring engine, and the web interface used for daily administration.

At its core was a **Raspberry Pi 2** running **Ubuntu 14.04 LTS**. I integrated it into a custom metal enclosure, added status LEDs, buttons, and active cooling fans, turning a small single-board computer into a practical device that could run continuously in an office environment.

<figure>
  <img src="/images/jibbik-device.jpeg" alt="Finished JIBBIK device in its black metal enclosure" />
  <figcaption>The finished JIBBIK appliance in its custom metal enclosure.</figcaption>
</figure>

This hardware-software combination made the device approachable to deploy while retaining the flexibility of Linux for network services, logging, monitoring, and future improvements.

## Designed for everyday operations

The management interface focused on the questions an administrator needs to answer quickly: Who is online? How much bandwidth is being used? Is a device consuming more than its allowance? Is the system healthy?

JIBBIK provided live and historical views of:

- Bandwidth usage and download activity
- Online users and their connection status
- Remaining data volume and user quotas
- CPU and memory usage, temperature, and system uptime
- Connection and administrative-event logs

Administrators could identify devices by MAC address, configure user policies, apply speed and volume limits, and manage Internet access from a central dashboard. This gave organizations a practical way to keep shared connectivity dependable and equitable without requiring specialist attention for routine tasks.

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin:1.5rem 0;">
  <figure style="margin:0;">
    <img src="/images/jibbik-dashboard.jpeg" alt="JIBBIK system dashboard showing temperature, system load, bandwidth, online users, uptime, data volume, memory, and CPU usage" />
    <figcaption>Live system-health and network-usage monitoring.</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/jibbik-online-users.jpeg" alt="JIBBIK online-user report listing devices, bandwidth usage, remaining volume, connection status, and Internet access" />
    <figcaption>A central view of online devices and their usage.</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/jibbik-device-status.jpeg" alt="JIBBIK graph showing a device's online status over time" />
    <figcaption>Per-device connection monitoring.</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/jibbik-bandwidth-graphs.jpeg" alt="JIBBIK graphs showing per-device download speed and remaining volume" />
    <figcaption>Per-device bandwidth and quota history.</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/images/jibbik-user-config.jpeg" alt="JIBBIK user configuration interface with limits, quotas, schedules, and Internet-access policies" />
    <figcaption>User and device policy configuration.</figcaption>
  </figure>
</div>

<figure>
  <img src="/images/jibbik-deployment-diagram.jpeg" alt="JIBBIK deployment diagram showing the device as a bandwidth controller between the Internet and a local network" />
  <figcaption>A typical deployment, with JIBBIK providing gateway, DHCP, DNS, and bandwidth-control services.</figcaption>
</figure>

## An early edge-computing project

Looking back, JIBBIK represents an early end-to-end edge platform in my work: a purpose-built device that combined hardware integration, embedded Linux, networking, backend services, real-time monitoring, data visualization, and a user-facing application.

Its goal was straightforward: help organizations make their shared Internet access more reliable, more transparent, and easier to manage. Building it from concept through field deployment was a formative experience in designing technology around operational needs—not just technical capability.

## From prototype to real deployments

JIBBIK attracted industry attention and led to the sale of **20 devices** for corporate and small-network environments. Those deployments confirmed the value of a compact, easy-to-administer platform for organizations that needed to share and manage several Internet connections without maintaining a large IT team.

I chose not to continue selling the device, not because the need disappeared, but because providing the level of ongoing technical support expected for a production networking product was beyond what I could sustain independently. Even so, the field experience showed how useful JIBBIK could be for businesses and smaller organizations looking for a practical, centralized way to manage shared connectivity.
