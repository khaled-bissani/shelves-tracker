import React, {useState} from 'react'
import Button from './Button'
import TextInput from './TextInput'
import {Formik} from 'formik'
import * as yup from 'yup'

const passwordSchema = yup.object({
  old_password: yup.string().required("Old Password is required").min(8),
  new_password: yup.string().required("New Password is required").min(8),
  confirm_password: yup.string().required("Confirm password is required").oneOf([yup.ref('new_password'), null], 'Passwords must match'),
})

const ChangePassword = () => {

  return (
    <Formik
    initialValues={{
      id:'',
      old_password: '',
      new_password: '',
      confirm_password: ''
    }}
    validationSchema={passwordSchema}
    onSubmit={(values,actions)=>{
      console.log('submit')
    }}
    >
      {(props)=>(
        <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
            <TextInput label={"Old Password"} type={"password"} placeholder={"Old Password"} textColor="black" bgColor="#D9D9D9" value={props.values.old_password} onChange={props.handleChange("old_password")}/>
            <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.old_password}</p>

            <TextInput label={"New Password"} type={"password"} placeholder={"New Password"} textColor="black" bgColor="#D9D9D9" value={props.values.new_password} onChange={props.handleChange("new_password")}/>
            <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.new_password}</p>

            <TextInput label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} textColor="black" bgColor="#D9D9D9" value={props.values.confirm_password} onChange={props.handleChange("confirm_password")}/>
            <p className='font-bold text-[14px] text-[#ff0000]'>{props.errors.confirm_password}</p>

            <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"} onClick={props.handleSubmit}/>
        </div>
      )}
    </Formik>)
}

export default ChangePassword