import React, { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import {useDispatch} from 'react-redux'
import { addGptMovies } from '../utils/gptSlice'

const GptSearchBar = () => {
  const searchText=useRef(null)
  const dispatch=useDispatch()
  const tmdbMovie=async (movie)=>{
   const data= await fetch('https://api.themoviedb.org/3/search/movie?query=' +
   movie +
   '&include_adult=false&language=en-US&page=1', API_OPTIONS)
   const json= await data.json()
   return json.results

  }
  const handleGptSearch=async()=>{
    const gptQuery="Act as a movie recommendation system and suggest some movies for the query: "+searchText.current.value + ".only give me names of 5 movie , comma separated like in this example ahead. Example: Life Of Pie, Don, Good Fellas, Intestellar, Martian"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")
    console.log(gptMovies)
    const tmbdSearchMovie=gptMovies.map((movie)=>tmdbMovie(movie))
    const results= await Promise.all(tmbdSearchMovie)
    console.log(results)
    dispatch(addGptMovies({movieNames:gptMovies,tmbdResults:results}))
  }

  return (
    <div className=' p-[10%]   flex justify-center '>
        <form className=' w-1/2 bg-black  grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
            <input ref={searchText} type="text" placeholder='You will definitely find something here' className='p-4 m-4 col-span-9'/>
            <button className=' bg-red-700 rounded-lg text-white p-4 m-4 col-span-3 ' onClick={handleGptSearch}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar