import React from 'react'
import { Link } from "react-router-dom";
import {FaEdit,FaRegUserCircle, FaLock} from "react-icons/fa";


const ProfileOption = () => {

    const linkClass=`flex text-black text-[16px] font-sans`
    const iconClass={color: "#3AA346", fontSize:"25px", marginRight:"10px"}

    return (
        <div className='flex flex-col items-start justify-around pl-8 h-[175px]'>
            <Link className={linkClass} to={"/edit_profile"}>
                <FaEdit style={iconClass}/>
                <p>Edit profile</p>
            </Link>
            <Link className={linkClass} to={"/profile_picture"}>
                <FaRegUserCircle style={iconClass}/>
                <p>Change profile picture</p>
            </Link>
            <Link className={linkClass} to={"/change_password"}>
                <FaLock style={iconClass}/>
                <p>Change password</p>
            </Link>
        </div>
    )
}

export default ProfileOption