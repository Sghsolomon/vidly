import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewMovies extends Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <Link className="btn btn-primary" to={`/movies/new`}>
        New Movies
      </Link>
    );
  }
}

export default NewMovies;
