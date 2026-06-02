import * as React from "react"

export interface Todo {
    id: string,
    title: string,
    isCompleted: boolean
}
function App() {

    const [currentValue, setCurrentValue] = React.useState("");
    const [todos, setTodos] = React.useState<Todo[]>([])


    function handleAddClickAddButton() {
        todos.push({
            id: `${Date.now()}`,
            title: currentValue,
            isCompleted: false
        })

        const newArray = [...todos]
        setTodos(newArray)
    }

    function handleRemove(id: string) {
        const result = todos.filter(e => e.id !== id)
        setTodos(result)
    }
    return (
        <>
            <div>

                <div>
                    <input value={currentValue} onChange={e => setCurrentValue(e.target.value)
                    } placeholder="Enter your todo here" type="text" />
                    <button onClick={handleAddClickAddButton}>Add</button>

                </div>
                <div>
                    <ul>
                        {todos.map(e => (
                            <>
                                <li key={e.id}>{e.title}</li>
                                <button onClick={() => { handleRemove(e.id) }}>Remove</button>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
