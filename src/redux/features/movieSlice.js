import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:[],
    reducers:{
        setMovies:(state,action) => {
            console.log(action.payload)
            state.push(action.payload)
        }
    }
})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer

export const movieState = state => state.movies