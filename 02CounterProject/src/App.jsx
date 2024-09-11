import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, updateCounter] = useState(15);



  const increment = () => {
    if(counter === 20) {
      return;
    }
    updateCounter(++counter)
    console.log("Value Incremented");
  }
  const decrement = () => {
    if(counter === 0) {
      return;
    }
    updateCounter(--counter)
    console.log("Value Decremented");
  }

  return (
    <>
      <h1>Learning hooks</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App
