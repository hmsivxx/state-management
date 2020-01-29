import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movie, setMovie] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 2331
    },
    {
      name: "Lord of the Rings",
      price: "$14",
      id: 2332
    },
    {
      name: "Saw",
      price: "$19",
      id: 2333
    }
  ]);
  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
