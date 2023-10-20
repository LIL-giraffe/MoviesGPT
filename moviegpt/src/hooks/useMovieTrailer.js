import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=()=>{
    const dispatch=useDispatch()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmRjMjU5NzRlZTAxY2I0OTI3ZjhhOTZkYTY4YmE5YyIsInN1YiI6IjY0YWUyYjM0YjY4NmI5MDBjYzBiYjljMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHNwdlQTEcL4RrGcPBnF3RgFyL7AXGY-w0JRJu0v4PY'
        }
      };
    const getMoviesVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/299054/videos?language=en-US', options)
        const json=await data.json();
        
        const filterdata=json.results.filter((video)=> video.type === "Trailer")
        const trailer= filterdata.length===0? filterdata[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
        // setTrailerKey(trailer.key)
    }

    useEffect(()=>{
      getMoviesVideo()
    },[])

}

export default useMovieTrailer