import React, { useState } from 'react'
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'
import Background from '../../assets/background.jpg'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        current_password: ''
    });

  return (
    <div className='flex justify-end h-screen' style={{backgroundImage : `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-56'>
            <h1 className='font-sans font-bold text-[24px] text-white'>Login</h1>
            <TextInput label={"Email"} type={"email"} placeholder={"Email"} />
            <TextInput label={"Password"} type={"password"} placeholder={"Password"} />
            <TextInput label={"Current Password"} type={"password"} placeholder={"Current Password"} />
            <SignupLoginButton text={"LOGIN"}/>
            <p className='font-sans'>Don't have an account?
                <span className='text-white cursor-pointer'> Signup</span>
            </p>
        </div>
    </div>
  )
}

export default Login