import React from 'react'
import { useEffect, useState } from "react";
import "../App.css"

const Jokes = () => {
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes")
                const data = await response.json()
                // console.log(data.data.data);
                setJokes(data.data.data)
            } catch (error) {
                console.log("Error Fetching Jokes", error);
            }
        }
        fetchJokes()
    }, [])

    return (
        <>
            <div className="jokes-container">
                {jokes.map((j) => (
                    <div key={j.id} className="joke-card">
                        <div className="joke-number">#{j.id}</div>
                        <div className="joke">{j.content}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Jokes