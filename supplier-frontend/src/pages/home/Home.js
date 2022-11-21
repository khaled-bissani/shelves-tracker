import React from 'react'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'

const Home = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
        <Title title={"Dashboard"}/>
        <div className='w-[900px] h-[120px] bg-[#D9D9D9]'></div>
          <div className='flex-col justify-center items-center w-[900px] h-[280px] bg-[#D9D9D9]'>
            <p className='text-center'>Waste products per Week</p>
          </div>
      </div>
    </div>
  )
}

export default Home