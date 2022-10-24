import React, { useState } from 'react'
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'
import Background from '../../assets/background.jpg'

const Signup = () => {

    const [user, setUser] = useState({
        full_name: '',
        email: '',
        password: '',
        current_password: ''
    });

    const handleChange=(e,input)=> {
        setUser({
          ...user, [`${input}`]: e.target.value
        });
    }

    const handleClick = async () => {
        console.log('clicked')
    }

  return (
    <div className='flex justify-end h-screen' style={{backgroundImage : `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-56'>
            <h1 className='font-sans font-bold text-[24px] text-white'>Signup</h1>
            <TextInput label={"Name"} type={"text"} placeholder={"Name"} value={user.full_name} onChange={(e)=>handleChange(e,"full_name")}/>
            <TextInput label={"Email"} type={"email"} placeholder={"Email"} value={user.email} onChange={(e)=>handleChange(e,"email")}/>
            <TextInput label={"Password"} type={"password"} placeholder={"Password"} value={user.password} onChange={(e)=>handleChange(e,"password")}/>
            <TextInput label={"Current Password"} type={"password"} placeholder={"Current Password"} value={user.current_password} onChange={(e)=>handleChange(e,"current_password")}/>
            <SignupLoginButton text={"SIGNUP"} onClick={handleClick}/>
            <p className='font-sans'>Already Have an account? <span className='text-white cursor-pointer'>Login</span></p>
        </div>
    </div>
  )
}

export default Signup