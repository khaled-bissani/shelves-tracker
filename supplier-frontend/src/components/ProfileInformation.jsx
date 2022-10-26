import React from 'react'
import TextInput from './TextInput'

const ProfileInformation = () => {
  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} textColor="black" bgColor="#D9D9D9"/>
    </div>
  )
}

export default ProfileInformation