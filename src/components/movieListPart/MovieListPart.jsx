import React from 'react'
import MovieSearch from '../movieSearch/MovieSearch'
import MovieList from '../movieList/MovieList'

function MovieListPart() {
  return (
    <div className='w-1/2 flex flex-col items-center'>
      <MovieSearch/>
      <MovieList/>
    </div>
  )
}

export default MovieListPart