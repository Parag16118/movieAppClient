import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Loader from "./Loader";
import MoviesContainer from "./MoviesContainer";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading === true ? <Loader /> : <MoviesContainer />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.movies.loading
  };
}

export default connect(mapStateToProps)(Landing);
