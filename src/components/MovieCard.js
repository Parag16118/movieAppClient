import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div className="text-center h-100 bg-light card card-bg">
          <img
            className=" img-fluid mt-4 mx-auto"
            width="70%"
            src={movie.Poster}
            alt="Movie Cover"
          />
          <div className="card-body d-flex flex-column">
            <h5 className=" card-title">
              {movie.Title} - {movie.Year}
            </h5>
            <Link
              className="mt-auto btn btn-primary btn-lg"
              to={"/movie/" + movie.imdbID}
            >
              <span className="mr-2">Details</span>{" "}
              <FaChevronCircleRight size="18" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
