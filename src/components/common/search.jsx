import React, { Component } from "react";

class SearchInput extends Component {
  state = {};
  render() {
    const { onChange, value, name } = this.props;
    return (
      <form>
        <label htmlFor="search"></label>
        <input
          onChange={(e) => onChange(e.currentTarget)}
          value={value}
          name={name}
          className="form-control col-md-6"
          type="search"
          id="search"></input>
      </form>
    );
  }
}

export default SearchInput;
