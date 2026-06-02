import React, { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  function handleIncreaseButtonClick() {
   setCount(count + 1)
  }
  
  return (
    <div>
      <button onClick={handleIncreaseButtonClick}>Increment</button>
      <h1>Count is {count}</h1>
      <button>Decrement</button>
    </div>
  )
}

export default App
