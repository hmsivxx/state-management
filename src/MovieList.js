import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movie] = useContext(MovieContext);
  return (
    <>
      {movie.map(movie => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </>
  );
};

export default MovieList;
