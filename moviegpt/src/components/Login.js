import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signIn,setSignIn]=useState(true)
    const toggle=()=>{
        setSignIn(!signIn)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-6'>{signIn?"Sign In":"Sign Up"}</h1>
            <input className='m-2 p-4 w-full bg-gray-700' type="text" placeholder='Email' />
            {!signIn?<input className='m-2 p-4 w-full bg-gray-700' type="text" placeholder='Full Name' />:""}
            <input className='m-2 p-4 w-full bg-gray-700' type="password" placeholder='Password' />
            <button className='m-2 p-4 rounded-lg w-full bg-red-800'>{signIn?"Sign In":"Sign Up"}</button>
            <p className='m-2 p-4 cursor-pointer hover:text-red-800 ' onClick={toggle}>{signIn? "Not Registered Register Here" : "Already A User?"}</p>
        </form>
    </div>
  )
}

export default Login