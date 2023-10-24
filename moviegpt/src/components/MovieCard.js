import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster}) => {
  if(!poster){return null}
  return (
    <div className='w-48 pr-3 '>
        <img src={IMG_CDN+poster} alt="poster" />
    </div>
  )
}

export default MovieCard