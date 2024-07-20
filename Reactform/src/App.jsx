import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyForm (){
  const[myCar,setmyCar] = useState("volvo");
  function handChange(event){
    setmyCar(event.target.value)
  }
  return (
    <form>
      <select value={myCar}
      onChange={handChange}
      > 
      <option value = "ford">ananya
      </option>
      <option value = "Maruti">
      </option>
      </select>
    </form>
  )
}
 
function App() {


  return (
    <>
   <MyForm />
   </>
  )
}

export default App
