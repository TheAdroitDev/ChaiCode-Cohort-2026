import React, { useState } from 'react'
// custom hook implementation
// import { useRandomUser } from "./hooks/use-random-user"
import { Counter } from './components/counter';

function App() {
    // const { user, fetchRandomUser, isFetching, error} = useRandomUser()

    return (
        <div>
            <Counter />
            {/*   <div>
                <button onClick={fetchRandomUser}>Fetch User</button>
                {user ? (isFetching ? <h1>Fetching...</h1> : <h1>{user.name.first} &nbsp;{user.name.last}</h1>) : ("No user found...")}
            </div>

            {error && <div>{error}</div>} */}
        </div>
            )
}

            export default App
