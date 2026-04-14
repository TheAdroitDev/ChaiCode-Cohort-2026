import type { Express } from "express";
import { createServer } from "node:http";
import { env } from "./app/env.js";
import { createApplication } from "./app/index.js";

export function main() {
    try {
        const server = createServer(createApplication())
        const PORT: number = env.PORT || 3000;

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    } catch (error: any) {
        console.log("Error Starting http server", error);
        // terminate the server on error
        process.exit(1)
    }
}

main()
