import React from "react";
import "./Style.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  const { items } = props;
  return (
    <div className="header">
      <span>
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </span>
      <span className="items">{items} </span>
      <span>Items</span>
    </div>
  );
}

export default Header;
