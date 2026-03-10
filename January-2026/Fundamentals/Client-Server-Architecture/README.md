# Client-Server Architecture

## Earlier System Architectures

Before client-server architecture became common, systems were mostly centralized:

- **Mainframe-Terminal Model:** A powerful central computer handled all processing, while terminals were only used for input/output.
- **Standalone Systems:** Each computer worked independently, with little or no network communication.
- **File-Sharing Model:** Multiple users accessed shared files over a network, but this often caused data conflicts and weak security.

These models worked for small or controlled environments, but they were hard to scale and maintain as usage grew.

## Need for Client-Server Architecture

As applications and users increased, older models created problems such as poor scalability, difficult maintenance, and weak security.

Client-server architecture was needed to:

- centralize data and services
- allow many users to access the same application
- improve security through controlled access
- make updates and maintenance easier
- support distributed systems over networks

## What is a Client Server Model..?

The **client-server model** is a network architecture where:

- a **client** sends requests for resources or services
- a **server** receives the requests, processes them, and sends back responses

Examples:

- Web browser (client) requesting a web page from a web server
- Mobile app (client) fetching data from an API server

This separation of responsibilities makes systems modular, scalable, and easier to manage.

## HTTP Request-Response Cycle

In web applications, communication between client and server usually follows the HTTP request-response cycle:

1. The client sends an HTTP request (for example, `GET /index.html`).
2. The request reaches the server.
3. The server processes the request (may access database/business logic).
4. The server sends an HTTP response with a status code, headers, and body.
5. The client receives and renders/uses the response.

Common HTTP methods:

- `GET` - fetch data
- `POST` - send new data
- `PUT`/`PATCH` - update data
- `DELETE` - remove data

## Web Servers and Web Hosting

### Web Server

A **web server** is software/hardware that stores, processes, and delivers web content over HTTP/HTTPS.

Popular web servers include:

- Nginx
- Apache
- Microsoft IIS

### Web Hosting

**Web hosting** is the service of making websites/applications available on the internet by running them on servers.

Hosting options:

- **Shared Hosting:** multiple websites share one server
- **VPS Hosting:** virtual private partition with more control
- **Dedicated Hosting:** one physical server for one user/application
- **Cloud Hosting:** scalable hosting across distributed cloud infrastructure

In short, a web server handles requests, and web hosting provides the environment where the server and application run.
