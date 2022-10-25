import React from 'react'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import TableHeader from '../../components/TableHeader'

const Expiry = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Expiry Date</p>
            <div className='flex flex-col justify-between w-[900px] h-[420px]'>
                <div className='flex justify-between w-full'>
                    <InputField placeholder={"Product Name"} />
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"ADD"}/>
                    <Button bgColor="#6EDA79" width="170px" height="46px" name={"EDIT"}/>
                    <Button bgColor="#FF0000" width="170px" height="46px" opacity="70" name={"DELETE"}/>
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"SEND"}/>
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