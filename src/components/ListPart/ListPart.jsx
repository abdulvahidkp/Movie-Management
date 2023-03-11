import React, { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import MovieSearch from "../movieSearch/MovieSearch";
import { movieState } from "../../redux/features/movieSlice";
import { useSelector } from "react-redux";

function ListPart() {
  const [query,setQuery] = useState('');

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <MovieSearch query={query} setQuery={setQuery} />
      <MovieList query={query}  />
    </div>
  );
}

export default ListPart;
