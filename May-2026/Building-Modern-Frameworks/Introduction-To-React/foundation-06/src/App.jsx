import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HookForm from './components/HookForm'
import ManualForm from './components/ManualForm'

function App() {
    const [Tab, setTab] = useState("manual")

    return (
        <>
            <div>
                <h1>Job application</h1>
                <div >
                    <button onClick={() => setTab("manual")}>Controlled - Manual</button>
                    <button onClick={() => setTab("rhf")}>React hook form</button>
                </div>
                {Tab === "manual" ? <ManualForm /> : <HookForm />}
            </div>
        </>
    )
}

export default App
