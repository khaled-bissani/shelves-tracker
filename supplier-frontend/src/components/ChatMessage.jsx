import React from 'react'

const ChatMessage = ({name,message,time}) => {
  return (
    <div className='flex flex-col justify-between w-3/4  bg-[#D9D9D9] mb-6 px-4'>
        <p className='text-[16px] font-sans h-1/4'>{name}</p>
        <p className='text-[20px] font-sans h-full'>{message}</p>
        <p className='flex justify-end text-[12px] font-sans h-1/4'>{time}</p>
    </div>
  )
}

export default ChatMessage