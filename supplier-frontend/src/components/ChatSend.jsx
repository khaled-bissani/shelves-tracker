import React from 'react'

const ChatSend = ({value,onChange,onClick}) => {
  return (
    <div className='flex justify-around items-center h-1/6 bg-[#3AA346]'>
        <input className='outline-none w-[450px] h-[40px] pl-4 bg-white font-sans text-[14px] border rounded-[10px]' type={"text"} value={value} onChange={onChange}/>
        <button className='bg-white text-[#3AA346] w-[70px] h-[40px] border rounded-full' onClick={onClick}>Send</button>
    </div>
  )
}

export default ChatSend