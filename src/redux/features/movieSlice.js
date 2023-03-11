import { createSlice } from "@reduxjs/toolkit";

function compareByDurationDesc(a, b) {
    if (a.duration < b.duration) {
      return 1;
    }
    if (a.duration > b.duration) {
      return -1;
    }
    return 0;
  }
  

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[]
    },
    reducers:{
        setMovies:(state,action) => {
            console.log(action.payload)
            state.movies.push(action.payload)
            state.movies.sort(compareByDurationDesc)
        }
    }
})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer

export const movieState = state => state.movies
export const filteredState = state => state.filteredMovies