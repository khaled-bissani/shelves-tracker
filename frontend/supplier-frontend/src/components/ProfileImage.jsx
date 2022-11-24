import React from 'react'

const ProfileImage = ({image_url}) => {
  return (
    <div className='w-[400px] h-[175px] bg-white rounded-[10px]'>
        <img className='h-full' src={image_url} alt={"profile picture"}/>
    </div>
  )
}

export default ProfileImage