import React, { Component } from "react";
//import { NavLink, Link, Route } from "react-router-dom";
//import Like from "../common/like";
//import Header from "./header";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, col) => {
    if (col.content) return col.content(item);

    return _.get(item, col.path);
  };

  render() {
    const { data, column } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              {column.map((col) => {
                return (
                  <td key={item._id + (col.path || col.key)}>
                    {this.renderCell(item, col)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
