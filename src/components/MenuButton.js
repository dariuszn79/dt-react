import React from "react";
import { Link } from "react-router-dom";
import '../global/_variables.css';
const MenuButton = props => {
    return (
<Link style={{ marginRight: "5px", color:"var(--colors-white-100)", fontFamily:"var(----typography-h-1-font-family)"}} to={props.to} className="btn btn-secondary">
        {props.name}
      </Link>
  );
};

export default MenuButton;