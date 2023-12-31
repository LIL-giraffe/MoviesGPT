import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { toogleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }))
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate('/')

      }
    });
  }, [])

const handleGptSearch=()=>{
  dispatch(toogleGptSearchView())
}

  return (
    <div className='absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between no-scrollbar'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      <div>
        <button className=' bg-purple-800 p-2 mx-2 my-2 text-white rounded-lg  ' onClick={handleGptSearch}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        {user && (<button className=' text-lg text-white font-bold rounded-lg p-2  ' onClick={handleSignout}>Sign Out</button>)}
      </div>
    </div>
  )
}

export default Header