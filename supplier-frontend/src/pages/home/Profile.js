import React from 'react'
import ProfileImage from '../../components/ProfileImage'
import ProfileInformation from '../../components/ProfileInformation'
import ProfileOption from '../../components/ProfileOption'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import {FaEdit,FaRegUserCircle, FaLock} from "react-icons/fa";

const Profile = () => {
  const buttonClass=`flex text-black text-[16px] font-sans`
  const iconClass={color: "#3AA346", fontSize:"25px", marginRight:"10px"}

  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Profile"}/>
            <div className='flex justify-center w-[900px] h-[420px] bg-[#D9D9D9] rounded-[10px]'>
                <div className='flex flex-col justify-between my-6 mr-6'>
                    <ProfileImage/>
                    <div className='flex flex-col items-start justify-around pl-8 w-[400px] h-[175px] bg-white rounded-[10px]'>
                        <button className={buttonClass}>
                            <FaEdit style={iconClass}/>
                            <p>Edit profile</p>
                        </button>
                        <button className={buttonClass}>
                            <FaRegUserCircle style={iconClass}/>
                            <p>Change profile picture</p>
                        </button>
                        <button className={buttonClass}>
                            <FaLock style={iconClass}/>
                            <p>Change password</p>
                        </button>
                    </div>
                </div>
                <ProfileInformation/>
            </div>
        </div>
    </div>
  )
}

export default Profile