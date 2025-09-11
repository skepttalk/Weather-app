import React from 'react'
import SunIcon from "../assets/images/SunIcon.png"
import CloudIcon from "../assets/images/CloudIcon.png"
import M3 from "../assets/images/M3.png"
import M4 from "../assets/images/M4.png"
import M5 from "../assets/images/M5.png"
import TM from "../assets/images/TM.png"
import Wind from "../assets/images/Wind.png"
import Drop from "../assets/images/Drop.png"
import UvI from "../assets/images/UvI.png"


const Information = ({data}) => {
  console.log(data)
  return (
    <div className='bg-[#DEAB4D] h-[500px] w-[300px] rounded-[40px] p-6'>
      <div className='flex flex-row justify-between text-[12px] font-inter font-medium text-[#FFFFFF] mb-4'>
        <div className='flex flex-col items-center'>
          <img src={CloudIcon} alt="fri" className='w-[20px] h-[20px] mb-1  opacity-100' />
          <h1>FRI</h1>
        </div>
        <div className='flex flex-col items-center'>
          <img src={SunIcon} alt="sat" className='w-[20px] h-[20px] mb-1' />
          <h1>SAT</h1>
        </div>
        <div className='flex flex-col items-center font-bold'>
          <img src={M3} alt="sun" className='w-[25px] h-[23px] mb-1' />
          <h1>SUN</h1>
        </div>
        <div className='flex flex-col items-center'>
          <img src={M4} alt="mon" className='w-[20px] h-[20px] mb-1' />
          <h1>MON</h1>
        </div>
        <div className='flex flex-col items-center'>
          <img src={M5} alt="tues" className='w-[20px] h-[20px] mb-1 opacity-100' />
          <h1>TUES</h1>
        </div>
      </div>

      <div className='text-center font-inter font-medium text-[17px] text-[#FFFFFF] mb-6'>
        <h1>8:00PM GMT</h1>
      </div>

      <h1 className='font-inter font-bold text-[14px] text-[#FFFFFF] mb-6'>
        AIR CONDITIONS
      </h1>

      <div className='flex flex-col space-y-6'>
        <div className='flex flex-row items-center space-x-3'>
          <img src={TM} alt="thermometer" className='w-[20px] h-[20px]' />
          <div>
            <h1 className='font-inter font-medium text-[12px] text-[#FFFFFF]'>Real Feel</h1>
            <h1 className='font-inter font-medium text-[16px] text-[#FFFFFF]'>{data.feels}°</h1>
          </div>
        </div>

        <div className='flex flex-row items-center space-x-3'>
          <img src={Wind} alt="wind" className='w-[20px] h-[20px]' />
          <div>
            <h1 className='font-inter font-medium text-[12px] text-[#FFFFFF]'>Wind</h1>
            <h1 className='font-inter font-medium text-[16px] text-[#FFFFFF]'>{data.wind} km/hr</h1>
          </div>
        </div>

        <div className='flex flex-row items-center space-x-3'>
          <img src={Drop} alt="rain" className='w-[20px] h-[20px]' />
          <div>
            <h1 className='font-inter font-medium text-[12px] text-[#FFFFFF]'>Chance of Rain</h1>
            <h1 className='font-inter font-medium text-[16px] text-[#FFFFFF]'>{data.prec}%</h1>
          </div>
        </div>

        <div className='flex flex-row items-center space-x-3'>
          <img src={UvI} alt="uv" className='w-[20px] h-[20px]' />
          <div>
            <h1 className='font-inter font-medium text-[12px] text-[#FFFFFF]'>UV Index</h1>
            <h1 className='font-inter font-medium text-[16px] text-[#FFFFFF]'>{data.uv}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information

