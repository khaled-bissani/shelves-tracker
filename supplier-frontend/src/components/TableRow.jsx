import React from 'react'

const TableRow = (props) => {

  const picture = `${process.env.REACT_APP_BASE_URL}/static/images/${props.image}`

  return (
    <div className='flex items-center justify-between bg-white m-4 h-[90px] border border-white rounded-[5px]'>
        <div className='w-[20%] h-[60px] pl-4'>
            <img className='w-[100%] h-[100%]' src={picture}/>
        </div>
        <input className='outline-none ml-16' placeholder={props.column1Placeholder} value={props.column1Value} onChange={props.column1OnChange} />
        <input className='outline-none' placeholder={props.column2Placeholder} value={props.column2Value} onChange={props.column2OnChange} contentEditable={props.editable}/>
    </div>
  )
}

export default TableRow