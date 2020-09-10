import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as authService from "../../services/authService";

const ProtectedRoute = (props) => {
  const { path, component: Component } = props;
  return (
    <Route
      path={path}
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
          return <Component {...props}></Component>;
        }
      }}></Route>
  );
};

export default ProtectedRoute;
