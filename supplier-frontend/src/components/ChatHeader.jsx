import React from 'react'

const ChatHeader = ({name}) => {
  return (
    <div className='h-1/6 bg-[#3AA346]'>
        <p className='flex flex-col items-center justify-center text-white text-[16px] font-sans h-full'>{name}</p>
    </div>
  )
}

export default ChatHeader