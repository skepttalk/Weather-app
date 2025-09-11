import React from 'react'
import Heart from "../assets/images/Heart.png"
import Rectangle1 from "../assets/images/Rectangle1.png"
import Rectangle2 from "../assets/images/Rectangle2.png"
import Rectangle3 from "../assets/images/Rectangle3.png"
import Rectangle4 from "../assets/images/Rectangle4.png"
const Activity = () => {
    return (
        <div className=' bg-[#DEAB4D]  h-[244px] top-[393px] left-[170px] rounded-[40px]'>
            <div className=' h-[30px] top-[20px] left-[35px] p-6 flex flex-row space-x-2'>
                <img src={Heart} alt="Heart" className='w-[25px] h-[25px] top-[20px] left-[35px]  ' />
                <h1 className='font-inter font-medium text-[24px] text-[#FFFFFF] '>
                    Activities in your area</h1>
            </div>
            <div className=' w-auto h-auto  rounded-[10px] p-7  flex justify-between'>
                <figure className='w-auto h-auto top-[86px] left-[50px] rounded-[10px] p-3  ' >
                    <img src={Rectangle1} alt="Rectangle1" />
                    <figure  className='font-inter font-medium  text-[12px] text-[#2B261D]'>2km away</figure>


                </figure>

                <figure className='w-auto h-auto top-[86px] left-[50px] rounded-[10px] p-3  ' >
                    <img src={Rectangle2} alt="Rectangle2" />
                    <figure  className='font-inter font-medium  text-[12px] text-[#2B261D]'>1.5km away</figure>

                </figure>

                <figure className='w-auto h-auto top-[86px] left-[50px] rounded-[10px] p-3  ' >
                    <img src={Rectangle3} alt="Rectangle3" />
                    <figure  className='font-inter font-medium  text-[12px] text-[#2B261D]'>3km away</figure>


                </figure>

                <figure className='w-auto h-auto top-[86px] left-[50px] rounded-[10px] p-3  ' >
                    <img src={Rectangle4} alt="Rectangle4" />
                    <figure  className='font-inter font-medium  text-[12px] text-[#2B261D]'>500m away</figure>


                </figure>






            </div>
        </div>
    )
}

export default Activity
