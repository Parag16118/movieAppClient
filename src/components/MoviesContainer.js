import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props; //movies array
    let content = "";
    content =
      movies.Response === "True"
        ? movies.Search.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.movies
  };
}

export default connect(mapStateToProps)(MoviesContainer);
