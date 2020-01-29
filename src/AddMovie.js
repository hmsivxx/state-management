import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import uuid from "uuid/v4";
import Movie from "./Movie";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movie, setMovie] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addNewMovie = e => {
    e.preventDefault();
    setMovie(movie => [...movie, { name: name, price: price, id: uuid() }]);
  };
  return (
    <>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label>Price</label>
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button onClick={addNewMovie}>Submit</button>
      </form>
    </>
  );
};

export default AddMovie;
