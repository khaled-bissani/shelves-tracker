import React from 'react'
import SideBar from '../../components/SideBar'
import ChatContact from '../../components/ChatContact'
import ChatHeader from '../../components/ChatHeader'

const Chat = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Chat</p>
            <div className='flex w-[900px] h-[400px] border border-[#868282]'>
                <div className='flex flex-col w-1/3 overflow-auto'>
                    <ChatContact name={"name"}/>
                </div>
                <div className='h-[400px] border border-[#868282]'></div>
                <div className='flex flex-col justify-between w-2/3'>
                    <ChatHeader name={"name"}/>
                    <div className='overflow-auto h-4/6'></div>
                    <div className='flex justify-around items-center h-1/6 bg-[#3AA346]'>
                        <input className='outline-none w-[450px] h-[40px] pl-4 bg-white font-sans text-[14px] border rounded-[10px]' type={"text"}/>
                        <button className='bg-white text-[#3AA346] w-[70px] h-[40px] border rounded-full'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat