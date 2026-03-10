# Introduction to Computer Networks

> Read the blog first.
> Networking becomes easier when you understand how devices communicate as a system, not as isolated definitions.

This folder supports the blog.
The blog is the primary source of learning.

---

## Start Here - Blog

Read:

[Understanding Network Devices](https://httparc.hashnode.dev/understanding-network-devices)

This README is meant to support the article, not replace it.

You will understand:

- what the internet is
- how the World Wide Web fits into the internet
- how data moves across networks
- what IP addresses and ports are used for
- what internet service providers do
- how routers help move data between networks

---

## What This Folder Contains

- structured networking explanations
- beginner-friendly breakdowns of core terms
- internet and web basics
- notes for revision while studying networking
- concept support for the linked article

This folder is meant to support, not replace, the article.

---

## What is Internet..?

The **internet** is a global network of connected computers and devices that communicate with each other using standard protocols.

It is often described as a **network of networks** because many smaller networks are connected together to form one massive communication system.

The internet allows devices to:

- exchange data
- access websites
- send emails
- stream media
- use online applications

In short, the internet is the infrastructure that makes digital communication possible across the world.

---

## World Wide Web (WWW) Overview

The **World Wide Web** is not the same as the internet.

The internet is the network itself.
The **WWW** is one service that runs on top of the internet.

The web is made up of:

- websites
- web pages
- browsers
- web servers
- links between resources

When you open a website in a browser, you are using the World Wide Web over the internet.

So:

- **Internet** = the global network infrastructure
- **WWW** = a system of web pages and resources accessed through browsers

---

## Data Transferring

Data transfer in networks happens when information moves from one device to another.

This data is usually broken into smaller units called **packets**.

General flow:

1. A device sends data.
2. The data is split into packets.
3. Packets travel across networks through multiple devices.
4. The destination device receives the packets.
5. The packets are reassembled into the original data.

This process makes network communication efficient and reliable, especially across large distances.

Examples of transferred data:

- loading a website
- sending a message
- downloading a file
- watching a video online

---

## IP Address, Ports

### IP Address

An **IP address** is a unique address used to identify a device on a network.

It helps data know where to go.

Examples:

- `192.168.1.10`
- `8.8.8.8`

You can think of an IP address like a house address for a device.

### Ports

A **port** helps identify which service or application on a device should receive the data.

If the IP address identifies the device, the port identifies the specific door/service on that device.

Examples:

- Port `80` for HTTP
- Port `443` for HTTPS
- Port `25` for SMTP

So when data arrives:

- IP address finds the correct device
- port finds the correct application/service on that device

---

## Internet Service Providers (ISPs)

An **Internet Service Provider (ISP)** is a company that gives users access to the internet.

Examples include broadband, fiber, mobile data, and cable internet providers.

ISPs are responsible for:

- connecting homes and businesses to the internet
- assigning IP addresses
- routing traffic to other networks
- sometimes providing DNS services as well

Without an ISP, most users would not have a path to the wider internet.

---

## Routers

A **router** is a networking device that forwards data between networks.

Its main job is to examine where data should go and send it along the correct path.

Routers are important because:

- they connect local networks to other networks
- they move packets toward their destination
- they help devices in a home or office access the internet

For example:

- your home router connects your local devices to your ISP
- routers across the internet help packets move from source to destination

In simple terms, routers help decide the path that data should follow.

---

## How These Concepts Connect

When you open a website:

1. Your device uses the internet connection provided by your ISP.
2. DNS helps find the IP address of the website.
3. The browser connects to that IP address using the correct port.
4. Routers move the packets across networks.
5. Data is transferred back and forth between your browser and the server.
6. The web page loads through the World Wide Web.

---

## Learning Path

1. Read the blog fully.
2. Revisit this folder while studying networking fundamentals.
3. Understand how internet, IP addresses, routers, and ISPs connect together.
4. Then move to DNS, protocols, and client-server communication.

---

## Quick Summary

- The internet is a global network of connected networks.
- The World Wide Web is a service that runs on top of the internet.
- Data moves across networks in packets.
- IP addresses identify devices, while ports identify services on those devices.
- ISPs connect users to the internet.
- Routers help data travel between networks.
