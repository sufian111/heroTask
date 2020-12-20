import React from "react";
import { useParams } from "react-router-dom";
import NavBarSection from "../NavBarSection/NavBarSection";
import "./BookMovieList.css";
import MovieWithTime from "./MovieWithTime";
const BookMovie = () => {
  const { id } = useParams();

  const movieWithTime = [
    {
      id: 1,
      name: "Tenet",
      startTime: "1.00pm",
      endTime: "4.00pm",
      date: "12-01-2021",
      category: "comedy",
      timeId: "tenet1",
    },
    {
      id: 2,
      name: "Tenet",
      startTime: "5.00pm",
      endTime: "8.00pm",
      date: "12-01-2021",
      category: "comedy",
      timeId: "tenet2",
    },
    {
      id: 3,
      name: "Tenet",
      startTime: "9.00pm",
      endTime: "12.00pm",
      date: "12-01-2021",
      category: "comedy",
      timeId: "tenet3",
    },
  ];

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
