import React from "react";
import { Link } from "react-router-dom";
import "./MovieWithTime.css";

const MovieWithTime = ({ movie }) => {
  const { name, startTime, endTime, date, category, timeId } = movie;
  return (
    <div className="col-md-12 mb-3 mt-3">
      <div className="row movieSingleCard p-2 d-flex justify-content-center">
        <div className="col-md-2">
          <p>{name} </p>
          <p>{category}</p>
        </div>
        <div className="col-md-2">
          <p>{date} </p>
        </div>
        <div className="col-md-2">
          <p>{startTime} </p>
        </div>
        <div className="col-md-2">
          <p>{endTime} </p>
        </div>
        <div className="col-md-2">
          <Link to={`/movie/${timeId}`}>
            <button className="btn btn-success">View Seat</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieWithTime;
