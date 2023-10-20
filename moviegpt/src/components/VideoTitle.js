import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-full aspect-video absolute py-[20%] px-24 text-white bg-gradient-to-r from-black '>
        <h1 className=' font-bold text-6xl mb-4 ' >{title}</h1>
        <p className=' w-1/4 text-lg ' >{overview}</p>
        <div className=' flex mt-6 '>
            <button className='rounded-lg py-3 px-12  bg-white hover:opacity-80 text-black text-lg'><PlayArrowIcon/> Play</button>
            <button className='rounded-lg py-3 px-12 ml-4 bg-slate-500 '><InfoIcon/> MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle