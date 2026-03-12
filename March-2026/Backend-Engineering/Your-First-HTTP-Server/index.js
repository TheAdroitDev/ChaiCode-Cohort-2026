const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/anime") {
        res.write(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ list: ['Spy x Family', 'Attack on Titan'] }))
    }
    else if (req.method === "POST" && req.url === "/generate") {
        
        let data = '';
        req.on("data", chunk => chunk += data)

        req.on("end", () => {
            const anime = JSON.parse(data);
            res.write(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({
                status: "received",
                anime
            }))
        })
    }
})