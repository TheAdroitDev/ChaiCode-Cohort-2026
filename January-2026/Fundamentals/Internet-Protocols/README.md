# Internet Protocols

> Read the blogs first.
> Internet protocols make more sense when you see them as rules that allow machines to communicate reliably, not as isolated definitions to memorize.

This folder supports the blogs.
The blogs are the primary source of learning.

---

## Start Here - Blogs

Read:

[Demystifying the Web](https://webarc.hashnode.dev/demystifying-the-web)

[TCP Handshakes and 3-Way Handshakes](https://webarc.hashnode.dev/tcp-handshakes-and-3-way-handshakes)

This README is meant to support the articles, not replace them.

You will understand:

- what internet protocols are and why they are needed
- how the TCP/IP model supports communication over networks
- how SYN, SYN-ACK, and ACK establish a TCP connection
- how data segmentation, error checking, and retransmission work
- how UDP differs from TCP
- the tradeoff between reliability and speed
- what HTTP, HTTPS, TLS/SSL, WebSocket, and WebRTC are used for

---

## What This Folder Contains

- structured protocol explanations
- transport layer concepts in simple language
- protocol comparisons for revision
- browser communication basics
- notes to revisit while learning web and networking foundations

This folder is meant to support, not replace, the articles.

---

## What are Internet Protocol, and why are they needed..?

Internet protocols are standardized rules that define how data is formatted, transmitted, received, and interpreted across networks.

Without protocols, devices made by different companies and running different software would not be able to communicate in a predictable way.

Protocols are needed because they provide:

- common communication rules
- consistent data transfer formats
- error handling mechanisms
- addressing and routing standards
- security and reliability layers

In simple terms, protocols are the agreed rules that make internet communication possible.

---

## TCP/IP

**TCP/IP** is the foundational communication model used on the internet.

It combines multiple protocols, but two of the most important are:

- **IP (Internet Protocol):** handles addressing and routing of data packets between devices
- **TCP (Transmission Control Protocol):** provides reliable, ordered, error-checked delivery of data

You can think of it like this:

- IP decides where data should go
- TCP makes sure data arrives correctly and in order

Together, they allow devices on different networks to exchange data reliably.

---

## SYN, SYN-ACK, and ACK

Before TCP sends actual application data, it first establishes a connection using the **3-way handshake**.

The steps are:

1. **SYN**: the client sends a synchronization request to the server.
2. **SYN-ACK**: the server responds with synchronize-acknowledge.
3. **ACK**: the client sends an acknowledgment back to the server.

After this exchange, both sides are ready to communicate.

This handshake helps both devices:

- confirm each other is reachable
- synchronize connection state
- prepare for reliable communication

---

## Data Segmentation, Error Checking and Retransmission

When large data is sent over TCP, it is divided into smaller parts called **segments**.

### Data Segmentation

Segmentation helps data travel more efficiently across networks instead of sending one huge block at once.

### Error Checking

TCP uses checks such as sequence tracking and checksum validation to detect whether data has been corrupted or lost during transmission.

### Retransmission

If a segment does not arrive or arrives incorrectly, TCP can send it again.

This is one reason TCP is considered reliable.

TCP makes sure:

- missing data is detected
- damaged data is identified
- lost segments can be retransmitted
- data is reassembled in the correct order

---

## UDP - Datagram-based Transmission

**UDP (User Datagram Protocol)** is another transport protocol, but unlike TCP, it is connectionless.

It sends data as independent units called **datagrams**.

UDP does not:

- establish a connection first
- guarantee delivery
- guarantee packet order
- retransmit lost packets automatically

Because of this, UDP is lighter and faster than TCP.

It is commonly used in situations where speed matters more than perfect reliability.

Examples:

- live streaming
- online gaming
- voice and video calls
- DNS queries

---

## Reliability vs Speed

One of the most important differences in networking is the tradeoff between reliability and speed.

### TCP

TCP prioritizes reliability.

It uses:

- connection setup
- acknowledgments
- retransmission
- ordered delivery

This makes it slower than UDP, but safer for important data.

### UDP

UDP prioritizes speed.

It avoids extra connection and recovery steps, which makes communication faster but less reliable.

So:

- use **TCP** when correctness matters most
- use **UDP** when low latency matters most

---

## HTTP, HTTPS

### HTTP

**HTTP (Hypertext Transfer Protocol)** is the protocol used for communication between browsers and web servers.

It defines how requests and responses are structured.

Example:

- browser requests a web page
- server responds with HTML, CSS, JS, or data

### HTTPS

**HTTPS** is HTTP with security added through encryption.

It uses TLS/SSL to protect data while it travels between client and server.

HTTPS provides:

- encryption
- integrity
- authentication

Today, most websites use HTTPS instead of plain HTTP.

---

## TLS / SSL

**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** are security protocols used to protect data in transit.

TLS is the modern and secure successor to SSL, though people still often say "SSL" informally.

TLS/SSL helps with:

- encrypting communication
- preventing tampering
- verifying server identity using certificates

This is what makes HTTPS secure.

---

## WebSocket

**WebSocket** is a protocol that enables persistent, two-way communication between a client and a server.

Unlike standard HTTP, where communication is mostly request-response based, WebSocket keeps the connection open so both sides can send data at any time.

It is useful for:

- chat applications
- live notifications
- multiplayer games
- real-time dashboards

In short, WebSocket is used when real-time, continuous communication is needed.

---

## WebRTC

**WebRTC (Web Real-Time Communication)** enables real-time peer-to-peer audio, video, and data sharing directly between devices.

It is commonly used for:

- video calls
- voice calls
- screen sharing
- direct browser-to-browser communication

WebRTC is designed for low-latency communication and is widely used in real-time communication systems.

---

## How These Concepts Connect

When a browser loads a secure modern website:

1. The browser resolves the domain name to an IP address.
2. It connects over TCP using the 3-way handshake.
3. If the site uses HTTPS, TLS secures the connection.
4. HTTP or HTTPS is then used for request-response communication.
5. If the app needs real-time updates, it may use WebSocket.
6. If it needs direct real-time media communication, it may use WebRTC.

---

## Learning Path

1. Read the blogs fully.
2. Understand why protocols exist before memorizing names.
3. Learn TCP and UDP differences clearly.
4. Then connect transport concepts to HTTP, HTTPS, WebSocket, and WebRTC.

---

## Quick Summary

- Internet protocols are the rules that make network communication possible.
- TCP/IP is the core foundation of internet communication.
- SYN, SYN-ACK, and ACK establish TCP connections.
- TCP uses segmentation, error checking, and retransmission for reliability.
- UDP is faster but does not guarantee delivery.
- HTTP and HTTPS power web communication, while TLS/SSL secures it.
- WebSocket and WebRTC support real-time communication use cases.
