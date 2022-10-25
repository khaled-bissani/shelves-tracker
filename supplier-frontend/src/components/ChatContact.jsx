import React from 'react'

const ChatContact = ({name,image_url}) => {
  return (
    <div>
        <div className='flex justify-evenly my-4'>
            <div className='w-[60px] h-[60px] bg-[#D9D9D9]'>
                <img className='h-full' src={image_url} alt={"profile"}/>
            </div>
            <p className='flex flex-col items-center justify-center'>{name}</p>
        </div>
        <div className='w-full border border-[#868282]'></div>
    </div>
  )
}

export default ChatContact