import React from 'react'

const TextInput = ({label,type,placeholder,value,onChange,textColor,bgColor}) => {

  const labelClass=`font-sans text-[16px] text-${textColor}`
  const inputClass=`outline-none w-[300px] h-[40px] pl-4 bg-${bgColor} font-sans text-[14px]`

  return (
    <div className='flex flex-col'>
        <label className={labelClass}>{label}</label>
        <input className={inputClass} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextInput