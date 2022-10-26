import React from 'react'
import ProfileInformation from '../../components/ProfileInformation'
import ProfileOption from '../../components/ProfileOption'
import SideBar from '../../components/SideBar'

const Profile = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <p className='text-[24px] font-sans font-bold'>Profile</p>
            <div className='flex justify-center w-[900px] h-[420px] bg-[#D9D9D9] rounded-[10px]'>
                <div className='flex flex-col justify-between my-6 mr-6'>
                    <div className='w-[400px] h-[175px] bg-white rounded-[10px]'></div>
                    <ProfileOption/>
                </div>
                <ProfileInformation/>
            </div>
        </div>
    </div>
  )
}

export default Profile