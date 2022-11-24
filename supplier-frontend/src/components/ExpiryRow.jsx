import React from 'react'

const ExpiryRow = (props) => {

  return (
    <div onClick={props.onClick} className='flex items-center bg-white m-4 h-[70px] border border-white rounded-[5px]'>
        <div className='flex items-center justify-between w-full p-4'>
            <p className='w-[100px]'>{props.productName}</p>
            <p>{props.productQuantity}</p>
            <p>{props.productExpiry}</p>
        </div>
    </div>
  )
}

export default ExpiryRow