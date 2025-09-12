import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import MainBody from '../Components/MainBody'

const MainPage = () => {

  const AccessKey = import.meta.env.WEATHER_API_KEY
  console.log(AccessKey,"AccessKey")


const[headerData,setHeaderData] = useState({});
const[MainBodyData,setMainBodyData] = useState({})
const [WeatherData,setWeatherData] = useState({})

useEffect(()=>{
  fetch(`http://api.weatherstack.com/current?access_key=${AccessKey}9&query=india, Rajasthan, Udaipur`)
    .then((res) => res.json())
    .then((data) => {
      setWeatherData(data);
      localStorage.setItem('weatherData', JSON.stringify(data)); 
    })
    .catch((err)=>console.log(err));
  const data = JSON.parse(localStorage.getItem("weatherData"));
  console.log(data, "weatherData");

  setMainBodyData({feels:data.current.feelslike, wind:data.current.wind_speed, prec:data.current.precip, uv:data.current.uv_index })
  
  setHeaderData({city:data.location.name, temperature:data.current.temperature, weather_descriptions:data.current.weather_descriptions[0],Time:data.location.localtime});


},[]);
  return (
    <>
        <Header data={headerData}/>
        <MainBody key="main-body" data={MainBodyData} />
    </>
  )
}                                                                           

export default MainPage
