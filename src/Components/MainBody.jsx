import React from 'react'
import Menu from './menu'
import Activity from './Activity'
import Information from './Information'
import Chart from './Chart'

const MainBody = () => {
  return (
    <div className='flex mt-[10px] gap-15'>
    <div>
        <Menu/>
    </div>
    <div className='flex flex-col'>
        <div><Activity/></div>
        <div><Chart/></div>
    </div>
    <div>
        <Information/>
    </div>
      
    </div>
  )
}

export default MainBody
