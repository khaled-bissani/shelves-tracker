import React, {useState} from 'react'
import Button from './Button'
import TextInput from './TextInput'
import {Formik} from 'formik'

const ChangePassword = () => {

  return (
    <Formik
    initialValues={{
      id:'',
      old_password: '',
      new_password: '',
      confirm_password: ''
    }}
    onSubmit={(values,actions)=>{
      console.log('submit')
    }}
    >
      {(props)=>(
        <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
            <TextInput label={"Old Password"} type={"password"} placeholder={"Old Password"} textColor="black" bgColor="#D9D9D9" value={props.values.old_password} onChange={props.handleChange("old_password")}/>
            <TextInput label={"New Password"} type={"password"} placeholder={"New Password"} textColor="black" bgColor="#D9D9D9" value={props.values.new_password} onChange={props.handleChange("new_password")}/>
            <TextInput label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} textColor="black" bgColor="#D9D9D9" value={props.values.confirm_password} onChange={props.handleChange("confirm_password")}/>
            <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"} onClick={props.handleSubmit}/>
        </div>
      )}
    </Formik>)
}

export default ChangePassword