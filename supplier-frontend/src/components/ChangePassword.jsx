import React, {useState} from 'react'

const ChangePassword = () => {

  const[password,setPassword]=useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  })

  const handleChange=(e,input)=> {
    setPassword({
      ...password, [`${input}`]: e.target.value
    });
  }

  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Old Password"} type={"password"} placeholder={"Old Password"} textColor="black" bgColor="#D9D9D9" value={password.old_password} onChange={(e)=>handleChange(e,"old_password")}/>
        <TextInput label={"New Password"} type={"password"} placeholder={"New Password"} textColor="black" bgColor="#D9D9D9" value={password.new_password} onChange={(e)=>handleChange(e,"new_password")}/>
        <TextInput label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} textColor="black" bgColor="#D9D9D9" value={password.confirm_password} onChange={(e)=>handleChange(e,"confirm_password")}/>
        <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"}/>
    </div>
  )
}

export default ChangePassword