import React, { useEffect, useState } from "react";
import { movieState } from "../../redux/features/movieSlice";
import { useSelector } from "react-redux";

function movieList({query}) {

  const movies = useSelector(movieState)
  const [items,setItems] = useState([])

  useEffect(()=>{
    if(query.length > 1){
      const f = movies.filter((movie)=>{
        return movie.name.toLowerCase().includes(query.toLowerCase())
      }) 
      setItems(f)
    } else {
      setItems(movies)
    }
  },[query,movies])  

  return (
    <>
    {
      items.length ?
       (items.map((movie,index)=>(
        <div className={`w-full  shadow-md flex my-3 justify-between items-center p-4 px-6 h-28 border-b-2 ${index%2?'border-blue-900': 'border-green-500'}`} >
          <div>
            <h1 className="text-4xl capitalize">{movie.name}</h1>
            <p className="text-lg text-[#00000096]">Rating: {movie.rating}/100</p>
          </div>
          <div>
            <p className="float-right text-lg text-[#00000096]">{movie.duration} Hrs</p>
          </div>
        </div>

       ))
      ):
      ( 
        movies.length ? <p></p> :
        <p className="text-4xl">No results found</p>
      ) 
    }
    </>
  );
}

export default movieList;
