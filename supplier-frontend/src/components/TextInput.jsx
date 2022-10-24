import React from 'react'

const TextInput = ({label,type,placeholder}) => {
  return (
    <div className='flex flex-col'>
        <label className='font-sans text-[16px] text-white'>{label}</label>
        <input className="outline-none w-[300px] h-[40px] pl-4 bg-white font-sans text-[14px]" type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput