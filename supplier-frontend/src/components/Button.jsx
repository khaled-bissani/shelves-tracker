import React from 'react'

const Button = ({bgColor,opacity,width,height,onClick,name}) => {

  const buttonClass=`w-[${width}] h-[${height}] text-white text-[16px] cursor-pointer`

  return (
    <div>
        <button className={buttonClass} onClick={onClick} style={{backgroundColor:bgColor, opacity:opacity}}>{name}</button>
    </div>
  )
}

export default Button