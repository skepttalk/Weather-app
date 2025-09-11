import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import MainBody from '../Components/MainBody'

const MainPage = () => {
  const[headerData,setHeaderData] = useState({});
  const[MainBodyData,setMainBodyData] = useState({})
// const [WeatherData,setWeatherData] = useState({})

useEffect(()=>{
//   fetch("http://api.weatherstack.com/current?access_key=96386b40c2d300172aa59ccec8a3fa49&query=india")
//     .then((res) => res.json())
//     .then((data) => {
//       setWeatherData(data);
//       localStorage.setItem('weatherData', JSON.stringify(data)); 
//     })
//     .catch((err)=>console.log(err));
  const data = JSON.parse(localStorage.getItem("weatherData"));
  console.log(data, "weatherData");
  
  setHeaderData({city:data.location.name, temperature:data.current.temperature, weather_descriptions:data.current.weather_descriptions[0],Time:data.location.localtime});
  // setMainBodyData({feels:data.current.feelslike, wind:data.current.wind_speed, prec:data.current.precip, uv:data.current.uv_index })

},[]);

useEffect(()=>{

  const data = JSON.parse(localStorage.getItem("weatherData"));
  console.log(data, "weatherData");

  setMainBodyData({feels:data.current.feelslike, wind:data.current.wind_speed, prec:data.current.precip, uv:data.current.uv_index })

},[]);


  return (
    <>
        <Header data={headerData}/>
        <MainBody key="main-body" data={MainBodyData} />
    </>
  )
}

export default MainPage
