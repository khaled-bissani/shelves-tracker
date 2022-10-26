import React from 'react'
import TextInput from './TextInput'

const ProfileInformation = () => {
  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
    </div>
  )
}

export default ProfileInformation