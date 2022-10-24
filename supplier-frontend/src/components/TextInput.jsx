import React from 'react'

const TextInput = ({type,placeholder}) => {
  return (
    <div>
        <input className="outline-none w-[300px] h-[40px] pl-4 bg-white" type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput