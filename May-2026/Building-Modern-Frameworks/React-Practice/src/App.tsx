import * as React from "react"
import "./App.css"

export interface Todo {
    id: string,
    title: string,
    isCompleted: boolean
}
function App() {

    const [currentValue, setCurrentValue] = React.useState("");
    const [todos, setTodos] = React.useState<Todo[]>([])


    function handleAddClickAddButton() {
        if (!currentValue.trim()) return
        todos.push({
            id: `${Date.now()}`,
            title: currentValue,
            isCompleted: false
        })

        const newArray = [...todos]
        setTodos(newArray)
        setCurrentValue("")
    }

    function handleRemove(id: string) {
        const result = todos.filter(e => e.id !== id)
        setTodos(result)
    }
    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Beautiful Todo</h1>   
                <p className="subtitle">Small, focused, and stylish</p>
            </header>
            <main className="main">
                <div className="input-row">
                    <input
                        className="todo-input"
                        value={currentValue}
                        onChange={e => setCurrentValue(e.target.value)}
                        placeholder="Enter your todo here"
                        type="text"
                        onKeyDown={e => { if (e.key === 'Enter') handleAddClickAddButton() }}
                    />
                    <button className="add-button" onClick={handleAddClickAddButton}>Add</button>

                </div>
                <ul className="todo-list">
                    {todos.map(e => (
                        <li key={e.id} className="todo-item">
                            <span className="todo-title">{e.title}</span>
                            <button className="remove-button" onClick={() => handleRemove(e.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default App
