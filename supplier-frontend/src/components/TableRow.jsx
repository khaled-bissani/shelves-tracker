import React from 'react'

const TableRow = (props) => {
  return (
    <div className='flex items-center justify-between bg-white m-4 h-[70px] border border-white rounded-[5px]'>
        <div className='pl-4'>
            <img src={props.column1}/>
        </div>
        <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} contentEditable={props.editable} className='outline-none'/>
        <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} contentEditable={props.editable} className='outline-none'/>
    </div>
  )
}

export default TableRow