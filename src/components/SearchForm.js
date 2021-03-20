import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { searchMovie, fetchMovies, setLoading } from "../actions/search";
import { connect } from "react-redux";

class SearchForm extends Component {
  handleChange = e => {
    this.props.searchMovie(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text); //coming from mapStateToProps
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron border bg-light mt-4 text-center very-light-bg">
        <div className="container">
          <h1 className="h3 mb-3">Search for a Movie, TV series ...</h1>
          <form id="searchForm" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="searchText"
                placeholder="Search Movies, TV Series ..."
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary btn-lg">
                  <FaSearch size="18" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.movies.text
  };
}

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(SearchForm);
