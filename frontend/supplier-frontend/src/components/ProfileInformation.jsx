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

const user = {"id":localStorage.getItem("userId")}

useEffect(() => {
  const fetchData = async() => {
      try {
          await sendRequest({method:"post",data:user,route:`${process.env.REACT_APP_BASE_URL}/profile/view`})
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
  fetchData()
}, [])

useEffect(() => {
  localStorage.setItem("userInfo", JSON.stringify(profile))
  localStorage.setItem("supplierName", profile.full_name)
}, [profile])

  

  return (
    <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9" value={profile.full_name}/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9" value={profile.email}/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9" value={profile.phone_number}/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} readOnly={"readOnly"} textColor="black" bgColor="#D9D9D9" value={profile.location}/>
    </div>
  )
}

export default ProfileInformation