const express = require("express");

const app = express()

app.get('/anime', (req, res) =>
    res.json({
        list: ['Spy x Family', 'Attack on Titan']
    })
)

app.post('/generate', (req, res) => {
    let anime = req.body;

    res.status(201).json({
        status: "received",
        anime: anime
    })
})