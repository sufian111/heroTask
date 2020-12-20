import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
  const { img, name, id } = movie;
  return (
    <div className="col-md-3 mb-2">
      <Link className="nav-link" to={`/bookMovie/${name}`}>
        <div className="Card">
          <img className="w-100 image-fluid" src={img} alt="" />
        </div>
        <div className="moveName h3">{name}</div>
      </Link>
    </div>
  );
};

export default MovieList;
