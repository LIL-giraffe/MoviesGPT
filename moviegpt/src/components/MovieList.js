import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='px-24 '>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scroll-m-0   '>
                
                <div className='flex '>
                    {movies?.map((movie) => <MovieCard poster={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList