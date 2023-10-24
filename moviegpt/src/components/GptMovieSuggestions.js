import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const { movieNames, tmbdResults } = useSelector((store) => store.gpt)
  console.log(movieNames)
  return (
    <div className=' m-4 p-4 text-white bg-opacity-90 bg-black' >
      {movieNames.map((movie, index) => (
        <MovieList title={movie} movies={tmbdResults[index]} />
      ))}
    </div>
  )
}

export default GptMovieSuggestions