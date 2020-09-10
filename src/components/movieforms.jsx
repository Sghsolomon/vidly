import React, { Component } from "react";
import Joi from "joi-browser";
import Forms from "./common/form";
import Input from "../components/common/input";
import { getMovies, getMovie, saveMovie } from ".././services/movieService";
import { getGenres } from "../services/genreService";
//import { getGenres } from "../../src/services/fakeGenreService";
//import { getMovies, getMovie } from "../../src/services/fakeMovieService";
//import { getMovie, saveMovie } from "../../src/services/fakeMovieService";
import { toast } from "react-toastify";

class MoviesForm extends Forms {
  state = {
    data: {
      title: "",
      numberInStock: "",
      dailyRentalRate: "",
      genreId: "",
    },
    error: {},
    genres: [],
  };

  async componentDidMount() {
    const { data: genres } = await getGenres();
    const { data: movies } = await getMovies();
    this.setState({ genres: genres });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const { data: movie } = await getMovie(movieId);
    console.log(movie);
    if (!movieId) return this.props.history.replace("/notfound");
    // if (movieId === "new") {
    //   return movieId;
    // } else if (movieId !== "new") {
    //   var movie = movies.find((m) => {
    //     return m._id === movieId;
    //   });
    // } else {
    //   this.props.history.replace("/notfound");
    // }
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(1)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .integer()
      .min(1)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  validate = () => {
    const { data, error } = this.state;
    const errors = { ...error };
    const result = Joi.validate(data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) {
      return null;
    } else {
      for (let key of result.error.details) {
        errors[key.path[0]] = key.message;
      }
    }
    return errors;
  };

  validateProperty = (e) => {
    const { name, value } = e.currentTarget;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });

    //add to server
    this.doSubmit();
  };

  async doSubmit() {
    try {
      await saveMovie(this.state.data);
      this.props.history.push("/movies");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("expected error");
    }
  }

  solo(item) {
    const movies = getMovies();
    const genres = getGenres();
    let movieDb = movies.find((m) => {
      return m._id === item._id || {};
    });
    console.log(movieDb);

    movieDb.title = item.title;
    movieDb.genre = genres.find((g) => {
      return g._id === item.genreId;
    });
    movieDb.numberInStock = item.numberInStock;
    movieDb.dailyRentalRate = item.dailyRentalRate;

    // if (!movieDb._id) {
    //   movieDb._id = Date.now();
    //   movies.push(movieDb);
    // }
    return movieDb;
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const data = { ...this.state.data };
    const error = { ...this.state.error };
    //const error = {};
    data[name] = value;
    this.setState({ data: data });

    const errorMessage = this.validateProperty(e);
    //console.log(errorMessage);
    if (!errorMessage.error) {
      return null;
    } else {
      for (let key of errorMessage.error.details) {
        error[key.path[0]] = key.message;
        console.log(error);
      }
    }

    this.setState({ data: data, error: error });
  };

  render() {
    const { data, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.data.title}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"></input>
          {error.title && (
            <div className="alert alert-danger">{error.title}</div>
          )}
        </div>
        <div>
          <label name="genreId" htmlFor="genreId">
            Genre
          </label>
          <select
            name="genreId"
            value={this.state.data.genreId}
            onChange={this.handleChange}
            className="custom-select"
            id="genreId">
            <option value=""></option>
            {this.state.genres.map((option) => {
              return (
                <option key={option._id} value={option._id}>
                  {option.name}
                </option>
              );
            })}
          </select>
          {error.genreId && (
            <div className="alert alert-danger">{error.genreId}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="numberInStock">Number in Stock</label>
          <input
            name="numberInStock"
            value={this.state.data.numberInStock}
            onChange={this.handleChange}
            type="number"
            className="form-control"
            id="numberInStock"></input>
          {error.numberInStock && (
            <div className="alert alert-danger">{error.numberInStock}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="rate">Rate</label>
          <input
            name="dailyRentalRate"
            value={this.state.data.dailyRentalRate}
            onChange={this.handleChange}
            type="number"
            className="form-control"
            id="rate"
            aria-describedby="emailHelp"></input>
          {error.dailyRentalRate && (
            <div className="alert alert-danger">{error.dailyRentalRate}</div>
          )}
        </div>
        <button
          // disabled={this.validate()}
          type="submit"
          className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default MoviesForm;
