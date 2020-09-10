import http from "./httpService";
//import { apiUrl } from "../../src/config.json";

export function getGenres() {
  return http.get("/genres");
}
