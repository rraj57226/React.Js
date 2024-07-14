import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Rohan",
    age:25
  }

  return (
    <>
     <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
     <Card username= "Rohan"  age = "25" btnText = "Click Me"/>
    </>
  )
}

export default App
