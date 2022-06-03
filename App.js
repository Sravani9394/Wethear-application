import React,{ useState } from "react";
import { fetchWeather } from "./fetchWeather.js";
import "./App.css"


function App() {

  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState({})

  const handleSearch = (e) =>{
    setQuery(e.target.value)
  }


const search = async (e) =>{
  if(e.code === 'Enter') {
    const data = await fetchWeather (query)
    setQuery('')
    setWeather(data)
  }
}
return(
  <div className="arc">
  <div className="main">
    
   < input value={query} type="text" placeholder="search.." className="search" onChange={handleSearch} onKeyPress={search} />

{weather.main &&
    <div className="city">
      <div className="city-name">
          <h2>{weather.name}</h2>
          <span>{weather.sys.name}</span>
          <div className="temp">
            {Math.round(weather.main.temp)}
            <span>&deg;c</span>
          </div>
          <div className="info">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} ait={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
      </div>

    </div>
}
  </div>
  </div>
  
)
}
export default App;
