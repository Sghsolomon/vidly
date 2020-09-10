import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rentals";
import Header from "./components/common/header";
import Notfound from "./components/notfound";
import Navbar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import * as authService from "./services/authService";
//import MovieForm from "./components/movieform";
import MoviesForm from "./components/movieforms";
import Register from "./components/register";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
//import MoviesTable from "./components/moviesTable";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <ToastContainer></ToastContainer>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Navbar user={this.state.user}></Navbar>
        </nav>
        <main className="container">
          <Switch>
            <Route
              path="/movies/:id"
              render={(props) => {
                if (!authService.getCurrentUser()) {
                  return (
                    <Redirect
                      to={{
                        pathname: "/loginForm",
                        state: { from: props.location },
                      }}></Redirect>
                  );
                } else {
                  return <MoviesForm {...props}></MoviesForm>;
                }
              }}></Route>
            {/* <ProtectedRoute
              path="/movies/:id"
              component={MoviesForm}></ProtectedRoute> */}
            <Route
              path="/movies"
              render={(props) => (
                <Movies user={this.state.user} {...props}></Movies>
              )}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/header" component={Header}></Route>
            <Route path="/notFound" component={Notfound}></Route>
            <Route path="/loginForm" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={Register}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/notfound"></Redirect>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
