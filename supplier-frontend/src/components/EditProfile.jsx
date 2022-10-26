import React, {useState} from 'react'
import Button from './Button'
import TextInput from './TextInput'


const EditProfile = () => {

  const[profile,setProfile]=useState({
    name: '',
    email: '',
    phone_number: '',
    address: ''
  })

  const handleChange=(e,input)=> {
    setProfile({
      ...profile, [`${input}`]: e.target.value
    });
  }

  const handleClick = () => {
    console.log('save')
  }

  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} textColor="black" bgColor="#D9D9D9" value={profile.name} onChange={(e)=>handleChange(e,"name")}/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} textColor="black" bgColor="#D9D9D9" value={profile.email} onChange={(e)=>handleChange(e,"email")}/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} textColor="black" bgColor="#D9D9D9" value={profile.phone_number} onChange={(e)=>handleChange(e,"phone_number")}/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} textColor="black" bgColor="#D9D9D9" value={profile.address} onChange={(e)=>handleChange(e,"address")}/>
        <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"} onClick={handleClick}/>
    </div>
  )
}

export default EditProfile