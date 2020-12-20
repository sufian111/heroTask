import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBarSection from "../NavBarSection/NavBarSection";
import "./BookMovieList.css";
import MovieWithTime from "./MovieWithTime";
const BookMovie = () => {
  const { id } = useParams();
  console.log(id);

  const movieName = { name: id };
  const [movieWithTime, setMovieWithTime] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/movieWithTime`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movieName),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieWithTime(data);
      });
  }, []);

  return (
    <>
      <NavBarSection></NavBarSection>
      <div className="movieContainer">
        <div className="container ">
          <div className="row ">
            {movieWithTime.map((movie) => (
              <MovieWithTime movie={movie} key={movie.id}></MovieWithTime>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMovie;
