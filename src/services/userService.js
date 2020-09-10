import http from "./httpService";

export function register(users) {
  return http.post("/users", {
    email: users.email,
    password: users.password,
    name: users.username,
  });
}
