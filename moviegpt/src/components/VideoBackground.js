import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
    // const [trailerKey, setTrailerKey]=useState(null) adding trailer using state
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer()
  return (
    <div className=' w-full'>
        <iframe 
        className=' w-full aspect-video ' 
        src={"https://www.youtube.com/embed/" +trailerVideo?.key+ "?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground