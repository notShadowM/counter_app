import React, { Component } from "react";
import "./Style.css";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Item extends Component {
  state = {
    // counter: 0,
    // added: false,
  };

  render() {
    const { itemsAdd, itemsSub, name, counter, add, sub } = this.props;

    return (
      <>
        <div className="main">
          <span className="zero">
            {/* {countr === 0 ? "zero" : "normal"} */}
            {counter || "Zero"}
          </span>
          <button
            className="add"
            name={name}
            onClick={(e) => {
              add(e);
              if (counter === 0) {
                itemsAdd();
              }
            }}
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              color="white"
              className="icon"
            />
          </button>{" "}
          <button
            className="sub"
            name={name}
            onClick={(e) => {
              sub(e);
              if (counter === 1) {
                itemsSub();
              }
            }}
            disabled={!counter}
          >
            <FontAwesomeIcon
              icon={faMinusCircle}
              color="white"
              className="icon"
            />
          </button>
        </div>
      </>
    );
  }
}
export default Item;
