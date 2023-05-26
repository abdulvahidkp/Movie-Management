import { createSlice } from "@reduxjs/toolkit";

function compareByDurationDesc(a, b) {
  const durationA = Number(a.duration);
  const durationB = Number(b.duration);

  if (durationA < durationB) {
    return 1;
  }
  if (durationA > durationB) {
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
            state.movies.push(action.payload)
            state.movies.sort(compareByDurationDesc)
        }
    }
})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer

export const movieState = state => state.movies
export const filteredState = state => state.filteredMovies