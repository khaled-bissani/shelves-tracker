import React from 'react'
import SideBar from '../../components/SideBar'

const Chat = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Chat</p>
            <div className='flex w-[900px] h-[400px] border border-[#868282]'>
                <div className='flex flex-col w-1/4 overflow-auto'>
                    <div className='flex justify-evenly my-4'>
                        <div className='w-[60px] h-[60px] bg-[#D9D9D9]'></div>
                        <p className='flex flex-col items-center justify-center'>name</p>
                    </div>
                    <div className='w-full border border-[#868282]'></div>
                </div>
                <div className='h-[400px] border border-[#868282]'></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Chat