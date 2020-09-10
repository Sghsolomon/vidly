import React from "react";

const ListGroup = (props) => {
  const { items, selectedGenre, onItemSelect } = props;
  return (
    <div>
      <ul className="list-group">
        {items.map((a) => {
          return (
            <li
              key={a._id}
              onClick={() => onItemSelect(a)}
              className={
                a.name === selectedGenre.name
                  ? "list-group-item active"
                  : "list-group-item "
              }>
              {a.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
