import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'
import Background from '../../assets/background.jpg'

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
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
        navigate("/home")
    }

  return (
    <div className='flex justify-end h-screen' style={{backgroundImage : `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-56'>
            <h1 className='font-sans font-bold text-[24px] text-white'>Login</h1>
            <TextInput label={"Email"} type={"email"} placeholder={"Email"} value={user.email} onChange={(e)=>handleChange(e,"email")} textColor="white" bgColor="white"/>
            <TextInput label={"Password"} type={"password"} placeholder={"Password"} value={user.password} onChange={(e)=>handleChange(e,"password")} textColor="white" bgColor="white"/>
            <TextInput label={"Current Password"} type={"password"} placeholder={"Current Password"} value={user.current_password} onChange={(e)=>handleChange(e,"current_password")} textColor="white" bgColor="white"/>
            <SignupLoginButton text={"LOGIN"} onClick={handleClick}/>
            <p className='font-sans'>Don't have an account?
                <span className='text-white cursor-pointer' onClick={() =>{navigate("/")}}>
                     Signup
                </span>
            </p>
        </div>
    </div>
  )
}

export default Login