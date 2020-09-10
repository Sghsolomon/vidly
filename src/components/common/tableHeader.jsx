import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (this.props.sortColumn.path === column.path) {
      if (this.props.sortColumn.order === "asc") {
        return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
      } else if (this.props.sortColumn.order === "desc") {
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.column.map((column) => {
            return (
              <th
                style={{ cursor: "pointer" }}
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}>
                {column.label} {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
