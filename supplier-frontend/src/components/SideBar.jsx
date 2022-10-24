import React from 'react'
import { Link } from "react-router-dom";
import { FaTachometerAlt,FaComment,FaUsers,FaRegCalendarAlt,FaUser,FaSignOutAlt} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-[250px] h-screen bg-[#3AA346]'>
        <h1 className='text-white text-[28px] font-sans font-bold'>Supplier Name</h1>
        <div className='flex flex-col items-start justify-around h-[400px]'>
            <Link className='flex text-white text-[18px] font-sans' to={"/home"}>
                <FaTachometerAlt style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Dashboard</p>
            </Link>
            <Link className='flex text-white text-[18px] font-sans' to={"/chat"}>
                <FaComment style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Chat</p>
            </Link>
            <Link className='flex text-white text-[18px] font-sans' to={"/client"}>
                <FaUsers style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Client</p>
            </Link>
            <Link className='flex text-white text-[18px] font-sans' to={"/expiry"}>
                <FaRegCalendarAlt style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Expiry Date</p>
            </Link>
            <Link className='flex text-white text-[18px] font-sans' to={"/profile"}>
                <FaUser style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Profile</p>
            </Link>
            <Link className='flex text-white text-[18px] font-sans' to={"/"}>
                <FaSignOutAlt style={{color: "white", fontSize:"25px", marginRight:"10px"}}/>
                <p>Logout</p>
            </Link>
        </div>
    </div>
  )
}

export default SideBar