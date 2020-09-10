import React, { Component } from "react";
import Joi from "joi-browser";
import Forms from "./common/form";
import { isNull } from "lodash";
import * as authService from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Forms {
  state = {
    data: { email: "", password: "" },
    error: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await authService.login(data.email, data.password);
      // window.location = "/";
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        this.setState({ error });
      }
    }
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/"></Redirect>;
    const { error, data } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              className="form-control col-4"
              value={data.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              type="text"></input>
            {error.email && (
              <div className="alert alert-danger col-4">{error.email}</div>
            )}
            <label value={this.state.data.password} htmlFor="password">
              Password
            </label>
            <input
              className="form-control col-4"
              value={data.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"></input>
            {error.password && (
              <div className="alert alert-danger col-4">{error.password}</div>
            )}
          </div>
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
