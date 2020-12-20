import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./MoveList/MovieList";
import NavBarSection from "./NavBarSection/NavBarSection";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/allMovie`)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      });
  }, []);

  return (
    <div className="container">
      <NavBarSection></NavBarSection>
      <div className="row mt-2">
        {allMovies.map((movie) => (
          <MovieList movie={movie} key={movie.id}></MovieList>
        ))}
      </div>
      <p>home</p>
    </div>
  );
};

export default Home;
