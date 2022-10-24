import React from 'react'
import SideBar from '../../components/SideBar'

const Home = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
        <p className='text-[24px] font-sans font-bold'>Dashboard</p>
        <div className='w-[900px] h-[100px] bg-[#D9D9D9]'></div>
        <div className='flex justify-between'>
          <div className='w-[575px] h-[300px] bg-[#D9D9D9]'></div>
          <div className='flex flex-col justify-between'>
            <div className='w-[300px] h-[140px] bg-[#D9D9D9]'></div>
            <div className='w-[300px] h-[140px] bg-[#D9D9D9]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home