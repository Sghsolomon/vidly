import http from "./httpService";
//import { apiUrl } from "../../src/config.json";

export function getMovies() {
  return http.get("/movies");
}

export function deleteMovie(movie) {
  return http.delete("/movies" + "/" + movie._id);
}

export function getMovie(movieId) {
  return http.get("/movies" + "/" + movieId);
}

export function saveMovie(movie) {
  const body = { ...movie };
  delete body._id;

  if (movie._id) {
    return http.put("/movies" + "/" + movie._id, body);
  } else {
    return http.post("/movies", body);
  }
}
