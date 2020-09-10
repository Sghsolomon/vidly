import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, value, label, onChange, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          label={label}
          onChange={onChange}
          name={name}
          value={value}
          type="text"
          className="form-control"
          id={name}
          aria-describedby="emailHelp"></input>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
