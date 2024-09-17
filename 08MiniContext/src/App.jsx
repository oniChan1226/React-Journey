import { useState } from 'react'
import './App.css'
import { UserContextProvider } from './Context/UserContextProvider'
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}

export default App
