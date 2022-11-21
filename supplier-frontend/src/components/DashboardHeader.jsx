import React from 'react'

const DashboardHeader = ({text,value}) => {
  return (
    <div className='flex flex-col justify-between h-[80px]'>
        <p>{text}</p>
        <p className='text-center font-bold text-[26px]'>{value}</p>
    </div>
  )
}

export default DashboardHeader