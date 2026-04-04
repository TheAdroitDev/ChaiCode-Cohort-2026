import { createServer } from "node:http"
import { createApplication } from "./app/index.js"

export function main() {
    try {
        const server = createServer(createApplication())
        const PORT: number = 3001

        server.listen(PORT, () => {
            console.log(`HTTP server is running on ${PORT}`);
        })
    } catch (error) {
        console.log("Error Starting http server");
        process.exit(1)
    }
}

main()