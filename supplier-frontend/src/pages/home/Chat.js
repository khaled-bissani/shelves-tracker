import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import ChatContact from '../../components/ChatContact'
import ChatHeader from '../../components/ChatHeader'
import ChatSend from '../../components/ChatSend'
import ChatMessage from '../../components/ChatMessage'
import Title from '../../components/Title'

const Chat = () => {

    const [message,setMessage]=useState('')

    const handleChange=(e)=> {
        setMessage(e.target.value);
    }

    const handleClick=()=> {
        console.log('clicked')
    }

  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Chat"}/>
            <div className='flex w-[900px] h-[420px] border border-[#868282]'>
                <div className='flex flex-col w-1/3 overflow-auto'>
                    <ChatContact name={"name"}/>
                </div>
                <div className='h-[420px] border border-[#868282]'></div>
                <div className='flex flex-col justify-between w-2/3'>
                    <ChatHeader name={"name"}/>
                    <div className='flex flex-col items-center overflow-auto h-4/6 pt-6'>
                        <ChatMessage name={"name"} message={"message"} time={"time"}/>
                    </div>
                    <ChatSend value={message} onChange={handleChange} onClick={handleClick}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat