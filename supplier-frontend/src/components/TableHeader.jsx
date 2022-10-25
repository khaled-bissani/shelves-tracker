import React from 'react'

const TableHeader = ({column1, column2 ,column3}) => {
    const paragraphClass= `flex flex-col items-center justify-center text-white text-[16px] px-[15px]`

  return (
    <div>
        <div className='flex justify-between h-[70px] bg-[#3AA346]'>
            <p className={paragraphClass}>{column1}</p>
            <p className={paragraphClass}>{column2}</p>
            <p className={paragraphClass}>{column3}</p>
        </div>
    </div>
  )
}

export default TableHeader