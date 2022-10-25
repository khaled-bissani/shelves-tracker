import React from 'react'

const InputField = ({placeholder}) => {
  return (
    <div>
        <input className='w-[170px] h-[46px] text-[18px] pl-[10px] border border-black outline-none' type={"text"} placeholder={placeholder} />
    </div>
  )
}

export default InputField