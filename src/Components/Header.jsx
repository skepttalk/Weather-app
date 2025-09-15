import React, { useEffect, useState } from 'react'
import cloud from "../assets/images/cloud.png"
import marker from "../assets/images/marker.png"
import sign from "../assets/images/sign.png"


const Header = ({data}) => {
  const dateObj = new Date(data.Time);
 const options = { weekday: "long", day: "numeric", month: "short", year: "numeric", };
 const formattedDate = dateObj.toLocaleDateString("en-US", options);
  //const [WeatherData, setWeatherData] = useState({});
  // useEffect(() => {
    
  //   fetch("http://api.weatherstack.com/current?access_key=a4c7c96e6d7466e2e8cc19604947a98c&query=india")
  //     .then((res) => res.json())
  //     .then((data) =>{
  //     // setWeatherData(data);
  //   })
  //   .catch((err) => console.log(err));
  // },[]);

  
  
  //  const data = JSON.parse(localStorage.getItem("weatherData"));
  // console.log(data, "weatherData");
  // const parsedData = JSON.parse(localStorage.getItem("weatherData"));
  // console.log(parsedData,"parsedData");
console.log(data)


  return (
    <div className="flex w-full justify-between p-7 " data-key="header">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-white justify-center items-center">
            <img src={marker} alt="marker" className="w-4 h-5" />
            <h1 className="font-inter font-medium text-[24px]">{data.city}</h1>
            <img src={sign} alt="marker" className="w-5 h-5" />
          </div>
          <h1 className="font-medium font-inter text-5xl text-white">{data.weather_descriptions}</h1>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="font-medium font-inter text-6xl text-white">{data.temperature}°C</h1>
          <h1 className="font-normal font-inter text-[18px] text-white">
       {formattedDate}
          </h1>
        </div>
      </div>
      <img src={cloud} alt="cloud" className="w-[321px] h-[254px]" />
    </div>
  );
};

export default Header;