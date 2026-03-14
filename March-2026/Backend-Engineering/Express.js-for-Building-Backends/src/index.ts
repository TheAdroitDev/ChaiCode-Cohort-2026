import http from "http"
import { env } from "./app/env.js"
import { createServerApplication } from "./app/index.js"


async function main() {
    try {
        const server = http.createServer(createServerApplication())

        const PORT: number = env.PORT ? +env.PORT : 3000

        server.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        })
    } catch (error) {
        throw new Error
    }
}

main()