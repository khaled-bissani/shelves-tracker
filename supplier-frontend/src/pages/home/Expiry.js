import React, {useState} from 'react'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import TableHeader from '../../components/TableHeader'
import Title from '../../components/Title'

const Expiry = () => {

    const[name,setName]=useState('')

    const handleChange=(e)=> {
        setName(e.target.value);
    }

    const handleAdd = () =>{
        console.log('Add')
    }

    const handleEdit = () =>{
        console.log('Edit')
    }
    const handleDelete = () =>{
        console.log('Delete')
    }

    const handleSend = () =>{
        console.log('Send')
    }

  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Expiry page"}/>
            <div className='flex flex-col justify-between w-[900px] h-[420px]'>
                <div className='flex justify-between w-full'>
                    <InputField placeholder={"Product Name"} value={name} onChange={handleChange}/>
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"ADD"} onClick={handleAdd}/>
                    <Button bgColor="#6EDA79" width="170px" height="46px" name={"EDIT"} onClick={handleEdit}/>
                    <Button bgColor="#FF0000" width="170px" height="46px" opacity="70" name={"DELETE"} onClick={handleDelete}/>
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"SEND"} onClick={handleSend}/>
                </div> 
                <div>
                    <TableHeader column1={"Product photo"} column2={"Product name"} column3={"Expiry date"} />
                    <div className='h-[300px] bg-[#D9D9D9] overflow-auto'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expiry