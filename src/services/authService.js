import http from "./httpService";
import jwtDecode from "jwt-decode";
//import { apiUrl } from "../../src/config.json";

const apiEndpoint = "/auth";
const tokenKey = "token";

export function register(users) {
  return http.post("/users", {
    email: users.email,
    password: users.password,
    name: users.username,
  });
}

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export async function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const response = localStorage.getItem("token");
    return jwtDecode(response);
  } catch (ex) {
    return null;
  }
}

export async function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getJwt() {
  return localStorage.getItem("token");
}

http.setJwt(getJwt());
