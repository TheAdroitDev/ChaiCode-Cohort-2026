import http from 'node:http'
import { env } from './env.js'
import { createServerApplication } from './app/index.js'

async function main() {
    try {
        const server = http.createServer(createServerApplication())
        const PORT: number = env.PORT ? +env.PORT : 8080

        server.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    } catch (error) {
        throw error
    }
}

main()