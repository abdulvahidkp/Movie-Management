import React from 'react'

function MovieSearch() {
  return (
    <>
    <input type='text' className='bg-gray-100/50 block mb-20  focus:outline-none w-3/4 focus:border-b-2 focus:border-black p-3 shadow-inner' placeholder='Search for movie by name' min={1} max={100} />
    </>
  )
}

export default MovieSearch