import React from 'react'
import { Link } from "react-router-dom";
import { FaTachometerAlt,FaComment,FaUsers,FaRegCalendarAlt,FaUser,FaSignOutAlt} from "react-icons/fa";

const SideBar = () => {

    const sidebarLinkClass=`flex text-white text-[18px] font-sans`
    const sidebarIconClass={color: "white", fontSize:"25px", marginRight:"10px"}
    
  return (
    <div className='flex flex-col items-center justify-evenly w-[250px] h-screen bg-[#3AA346]'>
        <h1 className='text-white text-[28px] font-sans font-bold'>Supplier Name</h1>
        <div className='flex flex-col items-start justify-around h-[400px]'>
            <Link className={sidebarLinkClass} to={"/home"}>
                <FaTachometerAlt style={sidebarIconClass}/>
                <p>Dashboard</p>
            </Link>
            <Link className={sidebarLinkClass} to={"/chat"}>
                <FaComment style={sidebarIconClass}/>
                <p>Chat</p>
            </Link>
            <Link className={sidebarLinkClass} to={"/client"}>
                <FaUsers style={sidebarIconClass}/>
                <p>Client</p>
            </Link>
            <Link className={sidebarLinkClass} to={"/expiry"}>
                <FaRegCalendarAlt style={sidebarIconClass}/>
                <p>Expiry Date</p>
            </Link>
            <Link className={sidebarLinkClass} to={"/profile"}>
                <FaUser style={sidebarIconClass}/>
                <p>Profile</p>
            </Link>
            <Link className={sidebarLinkClass} to={"/"}>
                <FaSignOutAlt style={sidebarIconClass}/>
                <p>Logout</p>
            </Link>
        </div>
    </div>
  )
}

export default SideBar