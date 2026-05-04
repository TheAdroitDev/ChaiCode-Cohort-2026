import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Jokes from './components/Jokes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Jokes Viewer Application</h1>
        <Jokes/>
    </>
  )
}

export default App
