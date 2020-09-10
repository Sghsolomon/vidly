import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import * as authService from "../services/authService";

class MoviesTable extends Component {
  column = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}> {movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => {
        if (authService.getCurrentUser()) {
          return (
            <button
              onClick={() => this.props.onDelete(movie)}
              className="btn btn-danger">
              Delete
            </button>
          );
        } else {
          return null;
        }
      },
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          column={this.column}></TableHeader>

        <TableBody data={movies} column={this.column}></TableBody>
      </table>
    );
  }
}

export default MoviesTable;
