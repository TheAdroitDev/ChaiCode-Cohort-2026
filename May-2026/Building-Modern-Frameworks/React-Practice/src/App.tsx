import { Counter } from './components/counter';

function App() {

    return (
        <div>
            // single line
            {new Array(2).fill(null).map(() =>
                <Counter />
            )}
        </div>
    )
}

export default App
