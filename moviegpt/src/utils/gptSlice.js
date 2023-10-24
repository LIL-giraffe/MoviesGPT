import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        tmbdResults:null
    },
    reducers:{
     toogleGptSearchView:(state)=>{
      state.showGptSearch=!state.showGptSearch
     },
     addGptMovies:(state,action)=>{
        const {movieNames,tmbdResults}=action.payload
        state.movieNames=movieNames
        state.tmbdResults=tmbdResults
     }
    }
})

export const {toogleGptSearchView,addGptMovies}=gptSlice.actions
export default gptSlice.reducer