import React from 'react'
import { useNavigate } from "react-router-dom"
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'
import Background from '../../assets/background.jpg'
import {Formik} from 'formik'
import * as yup from 'yup'
import sendRequest from '../../utils/axios'

const userSchema = yup.object({
    full_name: yup.string().required("Full Name is required").min(6),
    username: yup.string().required("Username is required").min(6),
    email: yup.string().required("Email is required").min(6).email(),
    password: yup.string().required("Password is required").min(8),

})

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
    validationSchema={userSchema}
    onSubmit={(values,actions)=>{
        values.user_type="Supplier"
        actions.resetForm();
        sendRequest({method:"post",data:values,route:`${process.env.REACT_APP_BASE_URL}/auth/signup`})
        .then((res)=>{
            console.log(res)
            localStorage.setItem("userId",res._id)
            navigate("/home")
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }}
    >
        {(props) => (
            <div className='flex justify-end h-screen' style={{backgroundImage : `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className='flex flex-col items-center justify-around w-[375px] h-[450px] bg-[#3AA346] mt-28 mr-56'>
                    <h1 className='font-sans font-bold text-[24px] text-white'>Signup</h1>
                    <TextInput label={"Name"} type={"text"} placeholder={"Name"} value={props.values.full_name} onChange={props.handleChange("full_name")} textColor="white" bgColor="white"/>
                    <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.full_name}</p>

                    <TextInput label={"Username"} type={"text"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange("username")} textColor="white" bgColor="white"/>
                    <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.username}</p>

                    <TextInput label={"Email"} type={"email"} placeholder={"Email"} value={props.values.email} onChange={props.handleChange("email")} textColor="white" bgColor="white"/>
                    <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.email}</p>

                    <TextInput label={"Password"} type={"password"} placeholder={"Password"} value={props.values.password} onChange={props.handleChange("password")}textColor="white" bgColor="white"/>
                    <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.password}</p>

                    <SignupLoginButton text={"SIGNUP"} onClick={props.handleSubmit}/>
                    <p className='font-sans'>Already have an account?
                        <span className='text-white cursor-pointer ml-2' onClick={() =>{navigate("/login")}}>
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