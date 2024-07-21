import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import {useWeather} from "./context/Weather"


function App() {
 const weather = useWeather()
useEffect(()=>{
  weather.fetchCurrentLocation();
},[])


  return (
    <>
    <h1>Weather Report</h1>
    <Input />
    <Button onClick = {weather.fetchData}value = "Search"/>
    <Card />  
    <Button value = "Refresh" />
    
    </>
  )
}

export default App
