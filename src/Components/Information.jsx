import React, { useState ,useEffect } from 'react'
import SunIcon from "../assets/images/SunIcon.png"
import CloudIcon from "../assets/images/CloudIcon.png"
import M3 from "../assets/images/M3.png"
import M4 from "../assets/images/M4.png"
import M5 from "../assets/images/M5.png"
import TM from "../assets/images/TM.png"
import Wind from "../assets/images/Wind.png"
import Drop from "../assets/images/Drop.png"
import UvI from "../assets/images/UvI.png"
import Arrow from "../assets/images/Arrow-Left.png"
import ArrowR from "../assets/images/Arrow-Right.png"

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
const d1 = new Date();





const Information = ({ data, day }) => {



  const [print_day, setPrint_day] = useState([]);
  const [currentDay, setCurrentDay] = useState(d1.getDay());

  useEffect(() => {


    console.log(currentDay, "current");
    console.log(weekday[currentDay]);

    calculateWeekDay(currentDay);

  }, []);

  function calculateWeekDay(currentDay) {
    let print_day_duplicate = [];
    for (let i = -2; i <= 2; i++) {
      let currentday_i = currentDay + i;
      if (currentday_i < 0) {
        print_day_duplicate.push(weekday.length + currentday_i);
      } else {
        print_day_duplicate.push(currentday_i % weekday.length);
        // currentDay=currentday+1%weekday.length
      }

    }
    setPrint_day(print_day_duplicate);
  }

  function leftClick() {
    let currentDayDuplicate = currentDay - 1;
    if (currentDay < 0) {
      currentDayDuplicate = weekday.length + currentDay;
    }
    setCurrentDay(currentDayDuplicate);

    calculateWeekDay(currentDayDuplicate);
  }


  function rightClick() {
    let currentDayDuplicate = currentDay + 1 % weekday.length;
    setCurrentDay(currentDayDuplicate);
    calculateWeekDay(currentDay);
  }


  return (
    <div className='bg-[#DEAB4D] h-[500px] w-[300px] rounded-[40px] p-6'>
      <div className='flex flex-row justify-between text-[12px] font-inter font-medium text-[#FFFFFF] mb-4'>
        <img src={Arrow } alt="Arrow" className="cursor-pointer w-[20px] h-[24px]" onClick={leftClick} />
        
         {
              print_day.map((day, index) => {
                return (
                  <div className='flex flex-col items-center gap-1'>
                    <h1>{weekday[day]}</h1>
                    <img src={M5} alt="m5" className='w-[20px] h-[19px]' />
                  </div>
                )
              })
            }

         <img src={ArrowR} alt="ArrowR" className="cursor-pointer w-[20px] h-[24px]" onClick={rightClick} />
      </div>
      

      <div className='text-center font-inter font-medium text-[17px] text-[#FFFFFF] mb-6'>
        <h1>{Times}</h1>
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

