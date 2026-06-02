import React, { useState } from 'react'
// custom hook implementation
import { useRandomUser } from "./hooks/use-random-user"

function App() {
    let [count, setCount] = useState(0)
    const { user, fetchRandomUser } = useRandomUser()

    function handleIncreaseButtonClick() {
        setCount(count + 1)
    }

    
    return (
        <div>
            <button onClick={handleIncreaseButtonClick}>Increment</button>
            <h1>Count is {count}</h1>
            <button>Decrement</button>
            <div>
            <button onClick={fetchRandomUser}>Fetch User</button>
                {user ? <h1>{user.name.first} &nbsp;{user.name.last}</h1> : "No user found ..."}
            </div>
        </div>
    )
}

export default App
