import React from 'react'
import Menu from './Menu'
import Activity from './Activity'
import Information from './Information'
import Chart from './Chart'

const MainBody = ({data}) => {
  return (
    <div className='flex mt-[10px] gap-15'>
      <Menu />
      <div className='flex flex-col'>
        <Activity />
        <Chart />
      </div>
      <Information data={data} />
    </div>
  )
}

export default MainBody
