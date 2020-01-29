import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
