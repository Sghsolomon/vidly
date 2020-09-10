import React, { Component } from "react";
import Joi from "joi-browser";
//import * as userService from "../services/userService";
import * as authService from "../services/authService";

class Register extends Component {
  state = {
    data: { email: "", password: "", username: "" },
    error: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    username: Joi.string().required(),
  };

  validate = () => {
    const { data } = this.state;
    const error = {};
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    if (!result.error) {
      return null;
    } else {
      for (let key of result.error.details) {
        //console.log(key);
        if (data[key.path[0]] === "") error[key.path[0]] += key.message;
      }
    }
    return error;
  };

  validateProperty = (e) => {
    const { name, value } = e.currentTarget;
    var errors = {};
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    errors = Joi.validate(obj, schema);
    //console.log(errors);
    if (!errors.error) {
      return null;
    } else {
      return errors.error.details[0].message;
    }
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const data = { ...this.state.data };
    data[name] = value;
    const errors = {};
    const errorMessage = this.validateProperty(e);
    if (errorMessage) {
      errors[name] = errorMessage;
    } else {
      delete errors[name];
    }
    //console.log(errors);

    this.setState({ data: data, error: errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate(e);
    this.setState({ error: error || {} });
    //call the server
    this.onSubmit();
  };

  onSubmit = async () => {
    try {
      const response = await authService.register(this.state.data);
      //localStorage.setItem("token", response.headers["x-auth-token"]);
      authService.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.error };
        errors.email = ex.response.data;
        this.setState({ error: errors });
      }
    }
  };

  render() {
    const { data, error } = this.state;
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.email}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"></input>
            {error.email && (
              <div className="alert alert-danger col-4">{error.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.password}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"></input>
            {error.password && (
              <div className="alert alert-danger col-4">{error.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.data.username}
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"></input>
            {error.username && (
              <div className="alert alert-danger col-4">{error.username}</div>
            )}
          </div>
          <div className="form-group form-check"></div>
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
