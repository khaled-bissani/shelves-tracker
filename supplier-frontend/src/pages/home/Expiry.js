import React, {useState} from 'react'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import TableHeader from '../../components/TableHeader'
import Title from '../../components/Title'
import Popup from 'reactjs-popup'

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

                    <Popup contentStyle={{background: '#3AA346', width: '500px', height:'430px', borderRadius: '10px'}} position='center center' overlayStyle={{background: 'rgba(0,0,0,0.5)' }} modal={true} trigger={<Button bgColor="#3AA346" width="170px" height="46px" name={"ADD"}/>} >
                    {close => (
                        <div>
                            <div className='flex justify-end mt-1 mr-6'>
                                <a className="close cursor-pointer text-[30px] rounded-full" onClick={close}>&times;</a>
                            </div>
                            <div className='flex flex-col items-center justify-evenly h-[370px]'>
                                <TextInput textColor={'white'} label={"Product Name"} type={"text"} placeholder={"Product Name"} value={product.product_name} onChange={(e)=>handleChange(e,"product_name")}/>
                                <TextInput textColor={'white'} label={"Product Quantity"} type={"text"} placeholder={"Product Quantity"} value={product.quantity_shelf} onChange={(e)=>handleChange(e,"quantity_shelf")}/>
                                <TextInput textColor={'white'} label={"Product Expiry Date"} type={"text"} placeholder={"yyyy-mm-dd"} value={product.expiry_date} onChange={(e)=>handleChange(e,"expiry_date")}/>
                                <Button bgColor="#6EDA79" width="300px" height="46px" name={"SAVE"} onClick={addProduct}/>
                            </div>
                        </div>
                    )}
                    </Popup>
                    
                    <Button bgColor="#FF0000" width="170px" height="46px" opacity="0.7" name={"DELETE"} onClick={handleDelete}/>
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