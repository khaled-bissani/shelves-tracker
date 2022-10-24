import React from 'react'

const SignupLoginButton = ({text}) => {
  return (
    <div>
        <button className='w-[300px] h-[50px] bg-black font-sans text-[18px] text-white'>{text}</button>
    </div>
  )
}

export default SignupLoginButton