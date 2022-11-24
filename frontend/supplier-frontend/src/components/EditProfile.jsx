import React, {useState, useEffect} from 'react'
import Button from './Button'
import TextInput from './TextInput'
import sendRequest from '../utils/axios'


const EditProfile = () => {

  const user = JSON.parse(localStorage.getItem("userInfo"))
  const userId = localStorage.getItem("userId")

  const [updated, setUpdated] = useState(false)

  const[profile,setProfile]=useState({
    id:userId,
    name: user.full_name,
    email: user.email,
    phone_number: user.phone_number,
    address: user.address
  }) 

  useEffect(() => {
    setUpdated(true)
  }, [profile])
  

  const handleChange=(e,input)=> {
    setProfile({
      ...profile, [`${input}`]: e.target.value
    });
  }

  const editProfile = () => {
    sendRequest({method:"put",data:profile,route:`${process.env.REACT_APP_BASE_URL}/profile/edit`})
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <div className='flex flex-col items-center justify-around w-[400px] h-[370px] bg-white rounded-[10px] my-6'>
        <TextInput label={"Name"} type={"text"} placeholder={"Name"} textColor="black" bgColor="#D9D9D9" value={profile.name} onChange={(e)=>handleChange(e,"name")}/>
        <TextInput label={"Email"} type={"text"} placeholder={"Email"} textColor="black" bgColor="#D9D9D9" value={profile.email} onChange={(e)=>handleChange(e,"email")}/>
        <TextInput label={"Phone Number"} type={"text"} placeholder={"Phone Number"} textColor="black" bgColor="#D9D9D9" value={profile.phone_number} onChange={(e)=>handleChange(e,"phone_number")}/>
        <TextInput label={"Address"} type={"text"} placeholder={"Address"} textColor="black" bgColor="#D9D9D9" value={profile.address} onChange={(e)=>handleChange(e,"address")}/>
        {updated? <Button bgColor="#3AA346" width="300px" height="40px" name={"SAVE"} onClick={editProfile}/> : <Button bgColor="#808080" width="300px" height="40px" name={"SAVE"} />}
    </div>
  )
}

export default EditProfile