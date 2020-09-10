import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Forms extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const { data } = this.state;
    const error = {};

    const result = Joi.validate(data, this.schema, {
      abortEarly: false,
    });
    //console.log(result);
    if (!result.error) {
      return null;
    } else {
      for (let key of result.error.details) {
        //console.log(key);
        error[key.path[0]] = key.message;
      }
    }
    // console.log(error);

    return error;
  };

  validateProperty = (e) => {
    const { name, value } = e.currentTarget;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    var response = "";
    if (!result.error) {
      response = null;
    } else {
      for (let key of result.error.details) {
        response = key.message;
      }
    }
    return response;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });

    //call server
    this.doSubmit();
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const data = { ...this.state.data };
    const error = { ...this.state.error };
    data[name] = value;
    this.setState({ data: data });

    const errorMessage = this.validateProperty(e);

    if (!errorMessage) {
      error[name] = null;
    } else {
      error[name] = errorMessage;
    }

    this.setState({ data: data, error: error });
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderSelect = (name, label, options) => {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={error[name]}></Select>
    );
  };

  renderInput = (name, label) => {
    const { data, error } = this.state;
    return (
      <Input
        className="form-control"
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={error[name]}></Input>
    );
  };
}

export default Forms;
