import React from 'react'

function MovieForm() {
  return (
    <div className='p-8 shadow-lg border rounded w-full md:w-1/2 flex-col 'style={{height:'450px'}}> 
      <div className='mt-3'>
        <label htmlFor="movieName" className=' block text-lg'>Movie Name</label>
        <input type='text' className='bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner' placeholder='Enter Movie Name'/>
      </div>
      <div className='my-6'>
        <label htmlFor="movieName" className=' block text-lg'>Ratings</label>
        <input type='number' className='bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner' placeholder='Enter Rating on a scale of 1 to 100' min={1} max={100} />
      </div>
      <div className='my-6'>
        <label htmlFor="movieName" className=' block text-lg'>Duration</label>
        <input type='text' className='bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner' placeholder='Enter Duration in hours or minutes' min={1} max={100} />
      </div>
        <button className='bg-green-600 hover:bg-green-700 duration-300 shadow-md mt-2 font-bold p-3 px-5 rounded text-white float-right'>Add Movie</button>
    </div>
  )
}

export default MovieForm