import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovie, setLoading } from "../actions/search";
import { FaChevronCircleLeft, FaRegWindowRestore } from "react-icons/fa";
import Loader from "./Loader";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="container">
        <div className="row">
          <h2 className="col-12 text-center mb-4">{movie.Title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 mb-3">
            <div className="text-center">
              <img
                src={movie.Poster}
                className="img-fluid img-thumbnail"
                alt="Poster"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <ul className="list-group">
              <li className="list-group-item light-bg">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item light-bg">
                <strong>Type:</strong> {movie.Type}
              </li>
              <li className="list-group-item light-bg">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item light-bg">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item light-bg">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item light-bg">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item light-bg">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item light-bg">
                <strong>Awards:</strong> {movie.Awards}
              </li>
              <li className="list-group-item light-bg">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="card card-body bg-light light-bg my-3">
              <div className="">
                <h3>Plot</h3>
                <p>{movie.Plot}</p>
                <Link to="/" className="btn btn-warning mr-3">
                  <FaChevronCircleLeft size="16" /> Back
                </Link>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaRegWindowRestore size="16" /> Go to IMDB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading === true ? <Loader /> : movieInfo;
    return <div>{content}</div>;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.movies.loading,
    movie: state.movies.movie
  };
}

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
