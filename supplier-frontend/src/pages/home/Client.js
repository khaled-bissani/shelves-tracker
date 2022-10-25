import React from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import TableHeader from '../../components/TableHeader'

const Client = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Client</p>
            <div className='flex flex-col justify-between w-[900px] h-[420px] border border-[#868282]'>
                <div className='flex justify-between w-full'>
                    <InputField placeholder={"Client Name"} />
                    <Button bgColor="#3AA346" name={"ADD"}/>
                    <Button bgColor="#6EDA79" name={"EDIT"}/>
                    <Button bgColor="#FF0000" opacity="70" name={"DELETE"}/>
                    <Button bgColor="#3AA346" name={"CHAT"}/>
                </div> 
                <div>
                    <TableHeader column1={"Client photo"} column2={"Client name"} column3={"Client email"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client