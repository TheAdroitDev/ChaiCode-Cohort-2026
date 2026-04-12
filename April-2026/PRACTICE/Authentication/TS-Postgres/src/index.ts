import type { Express } from "express";
import { createServer } from "node:http";

export function main() {
    try {
        const server = createServer()

        const PORT = 3000
    } catch (error: any) {
        console.log("Error Starting http server", error);
        // terminate the server on error
        process.exit(1)
    }
}

main()