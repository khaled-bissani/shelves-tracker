import React from 'react'
import classnames  from "classnames";

const Button = ({bgColor,opacity,width,height,name}) => {
  return (
    <div>
        <button className={classnames(`bg-[${bgColor}] opacity-${opacity} w-[${width}] h-[${height}] text-white text-[16px] cursor-pointer`)}>{name}</button>
    </div>
  )
}

export default Button