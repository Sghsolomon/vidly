import React, { Component } from "react";
import { getMovies, deleteMovie } from ".././services/movieService";
//import { getMovies, deleteMovie } from ".././services/fakeMovieService";
import Pagination from "./common/pagination";
import ListGroup from "./listGroup";
import * as movieService from "../services/movieService";
import { pagination } from "./utils/pagination";
import { getGenres } from "../services/genreService";
//import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";
import NewMovies from "./newmovie";
import SearchInput from "./common/search";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    getGenres: [],
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
    search: "",
  };

  async componentDidMount() {
    const { data: genre } = await getGenres();
    const genres = [{ name: "All Genres", _id: "" }, ...genre];
    const { data: movies } = await getMovies();

    this.setState({ movies, getGenres: genres });
    // const genre = getGenres();
    // const genres = [{ name: "All Genres", _id: "" }, ...genre];
    // this.setState({ movies: getMovies(), getGenres: genres });
  }

  onDelete = async (movie) => {
    const originalMovie = this.state.movies;
    const result = originalMovie.filter((item) => {
      return movie._id !== item._id;
    });
    this.setState({ movies: result });
    try {
      const { data: response } = await movieService.deleteMovie(movie);
      console.log(response);
      //await deleteMovie(movie);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("expected error");
      this.setState({ movies: originalMovie });
    }
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    console.log(movies);
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (g) => {
    this.setState({ selectedGenre: g, currentPage: 1, search: "" });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  handleChange = (e) => {
    const { name, value } = e;

    this.setState({ search: value, selectedGenre: "", currentPage: 1 });
  };

  render() {
    //console.log(this.state.movies);
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      getGenres,
      selectedGenre,
      sortColumn,
      search,
    } = this.state;

    let filtered = allMovies;
    if (search) {
      filtered = allMovies.filter((m) => {
        return m.title.toLowerCase().startsWith(search.toLowerCase());
      });
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = pagination(sorted, currentPage, pageSize);
    const { user } = this.props;
    console.log(user);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            onItemSelect={this.handleGenreSelect}
            selectedGenre={selectedGenre}
            items={getGenres}></ListGroup>
        </div>
        <div className="col">
          {user && (
            <div>
              <NewMovies></NewMovies>
            </div>
          )}
          Showing {filtered.length} Movies in
          <SearchInput
            onChange={this.handleChange}
            value={this.state.search}
            name="search"></SearchInput>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            //onDelete={this.onDelete}
            onSort={this.handleSort}></MoviesTable>
          <Pagination
            item={count}
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}></Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;
