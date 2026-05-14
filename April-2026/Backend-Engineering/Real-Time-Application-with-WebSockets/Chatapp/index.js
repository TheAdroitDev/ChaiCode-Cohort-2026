import http from "node:http"
import {Server} from "socket.io"
import fs from "node:fs/promises"
import express from "express"

async function main() {

    const server = http.createServer()
    const io = new Server()

    const app = express()

    // app.use()
    io.attach(server)

    server.listen(3000,() => { 
        console.log('Http server is running on port 3000');
        
     })
}
main()