import React from 'react'
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-[250px] h-screen bg-[#3AA346]'>
        <h1 className='text-white text-[28px] font-sans font-bold'>Supplier Name</h1>
        <div className='flex flex-col items-start justify-around h-[400px]'>
            <Link className='text-white text-[18px] font-sans' to={"/home"}>
                <p>Dashboard</p>
            </Link>
            <Link className='text-white text-[18px] font-sans' to={"/chat"}>
                <p>Chat</p>
            </Link>
            <Link className='text-white text-[18px] font-sans' to={"/client"}>
                <p>Client</p>
            </Link>
            <Link className='text-white text-[18px] font-sans' to={"/expiry"}>
                <p>Expiry Date</p>
            </Link>
            <Link className='text-white text-[18px] font-sans' to={"/profile"}>
                <p>Profile</p>
            </Link>
            <Link className='text-white text-[18px] font-sans' to={"/"}>
                <p>Logout</p>
            </Link>
        </div>
    </div>
  )
}

export default SideBar