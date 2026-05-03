import React, { useEffect, useState } from 'react'

const Jokes = () => {
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        const fetchJokes = async () => {
            const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes")
            const result = await response.json()
            setJokes(result.data.data)
        }
        fetchJokes()
    }, [])
    return (
        <>
            <div>Jokes</div>
            <div>
                {jokes.map((j, i) => (
                    <p key={i}>{j.content}</p>
                ))}
            </div>
        </>
    )
}

export default Jokes