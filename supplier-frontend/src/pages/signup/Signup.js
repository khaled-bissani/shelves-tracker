import React from 'react'
import { useNavigate } from "react-router-dom"
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'
import Background from '../../assets/background.jpg'
import {Formik} from 'formik'

const Signup = () => {

    const navigate = useNavigate();

  return (
    <Formik
    initialValues={{
        full_name:'',
        username:'',
        email:'',
        password:'',
        user_type:''
    }}
    onSubmit={(values,actions)=>{
        values.user_type="Supplier"
        console.log(values)
    }}
    >
        {(props) => (
            <div className='flex justify-end h-screen' style={{backgroundImage : `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-56'>
                    <h1 className='font-sans font-bold text-[24px] text-white'>Signup</h1>
                    <TextInput label={"Name"} type={"text"} placeholder={"Name"} value={props.values.full_name} onChange={props.handleChange("full_name")} textColor="white" bgColor="white"/>

                    <TextInput label={"Username"} type={"password"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange("username")} textColor="white" bgColor="white"/>

                    <TextInput label={"Email"} type={"email"} placeholder={"Email"} value={props.values.email} onChange={props.handleChange("email")} textColor="white" bgColor="white"/>

                    <TextInput label={"Password"} type={"password"} placeholder={"Password"} value={props.values.password} onChange={props.handleChange("password")}textColor="white" bgColor="white"/>

                    <SignupLoginButton text={"SIGNUP"} onClick={props.handleSubmit}/>
                    <p className='font-sans'>Already have an account?
                        <span className='text-white cursor-pointer' onClick={() =>{navigate("/login")}}>
                            Login
                        </span>
                    </p>
                </div>
            </div>
        )}
    </Formik>
  )
}

export default Signup