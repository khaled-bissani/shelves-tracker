import React from 'react'
import SignupLoginButton from '../../components/SignupLoginButton'
import TextInput from '../../components/TextInput'

const Signup = () => {
  return (
    <div>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"}/>
        <SignupLoginButton text={"SIGNUP"}/>
    </div>
  )
}

export default Signup