import React from 'react'
import Button from './Button'
import TextInput from './TextInput'


const EditProfile = () => {
  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} textColor="black" bgColor="#D9D9D9"/>
        <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"}/>
    </div>
  )
}

export default EditProfile