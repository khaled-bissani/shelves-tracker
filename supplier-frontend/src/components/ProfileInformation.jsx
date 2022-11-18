import React, { useState, useEffect} from 'react'
import TextInput from './TextInput'
import sendRequest from '../utils/axios'

const ProfileInformation = () => {

  const [profile, setProfile] = useState({
    full_name:'',
    email:'',
    phone_number:'',
    location:''
})

const userId = localStorage.getItem("userId")

useEffect(() => {
  const fetchData = async() => {
      try {
          await sendRequest({method:"post",data:userId,route:`${process.env.REACT_APP_BASE_URL}/profile/view`})
          .then((res)=>{
          console.log(res)
          setProfile({
              full_name : res.full_name,
              email : res.email,
              phone_number : res.phone_number,
              location: res.location
          })
          })
      } catch (error) {
          console.log(error)
      }
  }
  if(userId.length>0){
      fetchData()
  }
}, [userId])
  

  return (
    <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9"/>
    </div>
  )
}

export default ProfileInformation