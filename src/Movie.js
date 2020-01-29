import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </div>
  );
};

export default Movie;
