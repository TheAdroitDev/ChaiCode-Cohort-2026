import React from 'react'

function App() {
  let number = 0
  function handleIncreaseButtonClick() {
    console.log('Number After', number);
    number = number + 1
    console.log('Number Before', number);
  }
  return (
    <div>
      <button onClick={handleIncreaseButtonClick}>Increment</button>
      <h1>Count is {number}</h1>
      <button>Decrement</button>
    </div>
  )
}

export default App
