# DNS - Domain Name System

> Read the blog first.
> DNS is easier to understand when you see it as a system for mapping names to resources, not just as a list of record types.

This folder supports the blog.
The blog is the primary source of learning.

---

## Start Here - Blogs

Read:

[DNS Record Types Explained](https://httparc.hashnode.dev/dns-record-types-explained)

[DNS Resolution](https://httparc.hashnode.dev/dns-resolution)

This README is meant to support the article, not replace it.

You will understand:

- what DNS is
- why DNS exists
- how a domain name gets resolved
- how browsers depend on DNS before loading websites
- what A, CNAME, and MX records do
- how root, TLD, and authoritative servers fit together
- what a recursive DNS resolver actually does

---

## What This Folder Contains

- structured explanations
- DNS flow broken into simple steps
- core record types for revision
- hierarchy of DNS servers
- notes to revisit while learning networking basics

This folder is meant to support, not replace, the article.

---

## What is DNS..?

DNS stands for **Domain Name System**.

It is the system that translates human-readable domain names such as `google.com` into IP addresses such as `142.250.183.14`, which computers use to find each other on a network.

Without DNS, users would need to remember IP addresses for every website they wanted to visit.

In simple terms:

- humans remember names
- computers communicate using IP addresses
- DNS connects the two

---

## How DNS Resolves Domain Names..?

When you enter a domain in the browser, DNS resolution happens in stages:

1. The browser checks whether the DNS result is already cached.
2. If not, the operating system checks its DNS cache.
3. If still not found, the request goes to a recursive DNS resolver.
4. The resolver queries the DNS hierarchy to find the correct IP address.
5. Once found, the IP address is returned to the browser.
6. The browser uses that IP address to connect to the web server.

This is called **domain name resolution**.

---

## Types - A, CNAME, MX Records

### A Record

An **A record** maps a domain name to an IPv4 address.

Example:

- `example.com -> 192.0.2.1`

Use it when a domain should directly point to a server's IP address.

### CNAME Record

A **CNAME record** maps one domain name to another domain name.

Example:

- `www.example.com -> example.com`

It does not point directly to an IP address. Instead, it says that one hostname is an alias of another hostname.

### MX Record

An **MX record** defines which mail server is responsible for receiving emails for a domain.

Example:

- `example.com -> mail.example.com`

MX records are used by email systems, not for loading websites directly.

---

## DNS Hierarchy - Root, TLDs, Authoritative DNS Servers

DNS works like a hierarchy, not like one giant server.

### Root Servers

Root servers are at the top of the DNS hierarchy.
They do not usually know the final IP address, but they know where to find the next level.

### TLD Servers

TLD stands for **Top-Level Domain**.

These servers manage extensions such as:

- `.com`
- `.org`
- `.net`
- `.in`

They point the resolver to the authoritative server for the requested domain.

### Authoritative DNS Servers

These servers store the actual DNS records for a domain.

They provide the final answer, such as:

- A record
- CNAME record
- MX record

So the hierarchy looks like this:

`Root Server -> TLD Server -> Authoritative DNS Server -> Final DNS Record`

---

## Browser Queries to DNS Servers for Loading Websites

Before a website can load, the browser needs the IP address of the server hosting that site.

Typical flow:

1. You type `example.com` into the browser.
2. The browser asks for the IP address of `example.com`.
3. DNS resolution happens through cache or resolver lookup.
4. The browser receives the IP address.
5. The browser opens a connection to that server.
6. Then HTTP/HTTPS requests begin.

Important point:

DNS happens before the browser can meaningfully talk to the website server, because the browser first needs to know where that server is.

---

## Recursive DNS Resolver

A **recursive DNS resolver** is the server that does the work of finding the answer on behalf of the client.

Instead of the browser querying root servers, TLD servers, and authoritative servers by itself, it asks the recursive resolver to do that job.

The recursive resolver:

- receives the DNS query from the client
- checks its cache
- if needed, queries root servers
- then queries TLD servers
- then queries authoritative servers
- returns the final answer to the client
- stores the result in cache for future requests

Examples of recursive resolvers:

- ISP DNS servers
- Google DNS (`8.8.8.8`)
- Cloudflare DNS (`1.1.1.1`)

---

## Learning Path

1. Read the blog fully.
2. Revisit this folder while studying DNS and networking.
3. Make sure you understand resolution flow before memorizing record types.
4. Then move to broader internet and networking topics.

---

## Quick Summary

- DNS converts domain names into IP addresses.
- A browser relies on DNS before it can load a website.
- A records map to IPs, CNAME records map to hostnames, and MX records handle email routing.
- DNS resolution moves through root, TLD, and authoritative DNS servers.
- The recursive resolver performs the lookup work for the client.
