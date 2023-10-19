import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signIn, setSignIn] = useState(true)
    const [message, setMessage] = useState(null)
    

    const toggle = () => {
        setSignIn(!signIn)
    }

    //  / this gives us object so to extract the value out of it , email.current.value should be used/
    const email = useRef(null)
    const password = useRef(null)

    const handleClick = () => {
        const check = validation(email.current.value, password.current.value)
        setMessage(check)
        if (check) return

        if (!signIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + "-" + errorMessage)
                    // ..
                })
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode+errorMessage)
                });
        }

    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-6'>{signIn ? "Sign In" : "Sign Up"}</h1>
                <input ref={email} className='m-2 p-4 w-full bg-gray-700' type="text" placeholder='Email' />
                {!signIn ? <input className='m-2 p-4 w-full bg-gray-700' type="text" placeholder='Full Name' /> : ""}
                <input ref={password} className='m-2 p-4 w-full bg-gray-700' type="password" placeholder='Password' />
                <p className=' text-red-500 p-4 m-2 font-bold text-lg '>{message}</p>
                <button className='m-2 p-4 rounded-lg w-full bg-red-800' onClick={handleClick}>{signIn ? "Sign In" : "Sign Up"}</button>
                <p className='m-2 p-4 cursor-pointer hover:text-red-800 ' onClick={toggle}>{signIn ? "Not Registered Register Here" : "Already A User?"}</p>
            </form>
        </div>
    )
}

export default Login