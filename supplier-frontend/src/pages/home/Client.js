import React from 'react'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'

const Client = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Client</p>
            <div className='flex w-[900px] h-[420px] border border-[#868282]'>
                <div className='flex justify-between w-full'>
                    <InputField placeholder={"Client Name"} />
                    <button className='w-[170px] h-[46px] text-white text-[16px] bg-[#3AA346] cursor-pointer'>ADD</button>
                    <button className='w-[170px] h-[46px] text-white text-[16px] bg-[#6EDA79] cursor-pointer'>EDIT</button>
                    <button className='w-[170px] h-[46px] text-white text-[16px] bg-[#FF0000] opacity-70 cursor-pointer'>DELETE</button>
                    <button className='w-[170px] h-[46px] text-white text-[16px] bg-[#3AA346] cursor-pointer'>CHAT</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Client