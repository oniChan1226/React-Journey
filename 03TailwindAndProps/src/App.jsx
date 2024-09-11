import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  
  let myObj = {
    username: "fahad",
    age: 20,
  };
  let newArr = [1,2,3];
  // <Card username="John Doe" myObject = {myObj} myArray = {newArr} />

  return (
    <>
      <h1 className='bg-green-500 p-8 rounded-lg text-black font-semibold mb-4'>Tailwind Test</h1>
      <Card username = "John Doe" btnText = "Click Me" />
      <Card username = "Samantha and Rachel"/>
    </>
  )
}

export default App
