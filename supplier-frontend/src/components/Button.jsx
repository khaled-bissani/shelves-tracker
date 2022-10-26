import React from 'react'

const Button = ({bgColor,opacity,width,height,onClick,name}) => {

  const buttonClass=`bg-[${bgColor}] opacity-${opacity} w-[${width}] h-[${height}] text-white text-[16px] cursor-pointer`

  return (
    <div>
        <button className={buttonClass} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button