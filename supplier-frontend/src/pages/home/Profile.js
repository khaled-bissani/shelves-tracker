import React from 'react'
import ProfileImage from '../../components/ProfileImage'
import ProfileInformation from '../../components/ProfileInformation'
import ProfileOption from '../../components/ProfileOption'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'

const Profile = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Profile"}/>
            <div className='flex justify-center w-[900px] h-[420px] bg-[#D9D9D9] rounded-[10px]'>
                <div className='flex flex-col justify-between my-6 mr-6'>
                    <ProfileImage/>
                    <ProfileOption/>
                </div>
                <ProfileInformation/>
            </div>
        </div>
    </div>
  )
}

export default Profile