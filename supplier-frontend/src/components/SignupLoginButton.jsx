import React from 'react'

const SignupLoginButton = ({onClick,text}) => {
  return (
    <div>
        <button className='w-[300px] h-[50px] bg-black font-sans text-[18px] text-white' onClick={onClick}>{text}</button>
    </div>
  )
}

export default SignupLoginButton