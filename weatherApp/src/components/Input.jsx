import React from "react";
import { useWeather } from "../context/Weather";
const Input = () => {
    const Weather = useWeather();
    return (
        <input 
        className="input-field"
        placeholder="Search here"
        value={Weather.searchCity}
        onChange = {(e) => Weather.setSearchCity(e.target.value)}
        />
    )
}

export default Input;