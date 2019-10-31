import "./Dropdown.scss";
import React from "react";

const Dropdown = props => {
  return (
    <ul className="dropdown">
      {props.items.map((item, i) => {
        return (
          <li className="dropdown__item" key={i}>
            <a className="dropdown__link" href="/">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
