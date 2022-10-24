import React from 'react'
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'

const Signup = () => {
  return (
    <div className='flex justify-end h-screen'>
        <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-28'>
            <h1 className='font-sans font-bold text-[24px] text-white'>Signup</h1>
            <TextInput label={"Name"} type={"text"} placeholder={"Name"}/>
            <TextInput label={"Email"} type={"email"} placeholder={"Email"}/>
            <TextInput label={"Password"} type={"password"} placeholder={"Password"}/>
            <TextInput label={"Current Password"} type={"password"} placeholder={"Current Password"}/>
            <SignupLoginButton text={"SIGNUP"}/>
            <p className='font-sans'>Already Have an account? <span className='text-white cursor-pointer'>Login</span></p>
        </div>
    </div>
  )
}

export default Signup