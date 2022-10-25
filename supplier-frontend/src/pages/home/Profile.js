import React from 'react'
import Button from '../../components/Button'
import ProfileOption from '../../components/ProfileOption'
import SideBar from '../../components/SideBar'
import TextInput from '../../components/TextInput'

const Profile = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Profile</p>
            <div className='flex justify-center w-[900px] h-[420px] bg-[#D9D9D9] rounded-[10px]'>
                <div className='flex flex-col justify-between my-6 mr-6'>
                    <div className='w-[400px] h-[175px] bg-white rounded-[10px]'></div>
                    <div className='w-[400px] h-[175px] bg-white rounded-[10px]'><ProfileOption/></div>
                </div>
                <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
                  <TextInput label={"Name"} type={"text"} placeholder={"Name"} textColor="black" bgColor="#D9D9D9"/>
                  <TextInput label={"Email"} type={"text"} placeholder={"Email"} textColor="black" bgColor="#D9D9D9"/>
                  <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} textColor="black" bgColor="#D9D9D9"/>
                  <TextInput label={"Address"} type={"text"} placeholder={"Address"} textColor="black" bgColor="#D9D9D9"/>
                  <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile