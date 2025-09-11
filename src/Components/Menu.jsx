import React from 'react'
import Ellipse from "../assets/images/Ellipse.png"
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"


const Menu = () => {
    return (
        
        <div className=' bg-[#DEAB4D] h-[537px] w-auto rounded-[40px] flex flex-col items-center p-4 gap-[100px] '>

            <img src={Ellipse} alt="photo" className='w-[60px] h-[60px]' />

            <div className='w-[85px] h-[338px] top-[179px] left-[8px] flex flex-col gap-5 items-center '>

                <div className='w-[85] h-[68] top-[179px] left-[8px]'>
                    <img src={icon1} alt="explore" className='w-[50px] h-[50px] top-[179px] left-[25px]' />
                   <h1 className='font-semibold font-inter  text-[14px] text-[#FFFFFF]'> weather</h1>
                </div>

                <div className='w-[85] h-[68] top-[269px] left-[8px]'>
                    <img src={icon2} alt="explore" className='w-[50px] h-[50px] top-[269px] left-[25px]' />
                    <h1 className='font-semibold font-inter  text-[14px] text-[#FFFFFF]'> explore</h1>
                </div>


                <div className='w-[85] h-[68] top-[359px] left-[8px]'>
                    <img src={icon3} alt="explore" className='w-[50px] h-[50px] top-[359px] left-[25px]' />
                    <h1 className='font-semibold font-inter  text-[14px] text-[#FFFFFF]'> cities</h1>
                </div>

                <div className='w-[85] h-[68] top-[449px] left-[8px]'>
                    <img src={icon4} alt="explore" className='w-[50px] h-[50px] top-[449px] left-[25px]' />
                    <h1 className='font-semibold font-inter  text-[14px] text-[#FFFFFF]'> settings</h1>

                </div>

            </div>
        </div>
    )
}

export default Menu
