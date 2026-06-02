import { Counter } from './components/counter';
import * as React from "react"

function App() {
    const [count, setCount] = React.useState(1)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Add Counter</button>
            {new Array(count).fill(null).map(() => <Counter />)}
        </div>
    )
}

export default App
