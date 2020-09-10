import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  style = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul>
          {this.state.tags.length === 0 && "Please insert tags"}
          {this.listRender()}
        </ul>
      </div>
    );
  }
  getBadgeClasses = () => {
    const { count } = this.state;
    let className = "badge m-2";
    if (count === 0) {
      className += " badge-warning";
    } else {
      className += " badge-primary";
    }
    return className;
  };

  formatCount = () => {
    const { count } = this.state;
    if (count === 0) {
      return "Zero";
    } else {
      return count;
    }
  };

  listRender = () => {
    const { tags } = this.state;
    if (tags.length === 0) {
      return <p>There is no tag</p>;
    } else {
      return tags.map((tag) => <li key={tag}>{tag}</li>);
    }
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
