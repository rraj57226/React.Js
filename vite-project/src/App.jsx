import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);
  const addValue = () => {
    count = count + 1
    setCount(count);
    if(count > 20){
      setCount(20);
    } 
  }
  const RemoveValue = () =>{
    setCount(count -1);
  }

  return (
    <>
     <button onClick={addValue}>AddValue {count}</button>
     <button onClick={RemoveValue}>RemoveValue {count}</button>
    </>
  )
}

export default App
