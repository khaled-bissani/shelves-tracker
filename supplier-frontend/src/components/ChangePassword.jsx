import React from 'react'

const ChangePassword = () => {
  return (
    <div className='flex flex-col items-center justify-around h-full'>
        <TextInput label={"Old Password"} type={"password"} placeholder={"Old Password"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"New Password"} type={"password"} placeholder={"New Password"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} textColor="black" bgColor="#D9D9D9"/>
        <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"}/>
    </div>
  )
}

export default ChangePassword