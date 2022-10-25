import React from 'react'
import classnames  from "classnames";

const Button = ({bgColor,opacity,name}) => {
  return (
    <div>
        <button className={classnames(`bg-[${bgColor}] opacity-${opacity} w-[170px] h-[46px] text-white text-[16px] cursor-pointer`)}>{name}</button>
    </div>
  )
}

export default Button