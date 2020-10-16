import React, { Component } from "react";
import Header from "./Header";
// import Main from "./Main";
import Item from "./Main/Item";
import "./Style.css";

import { faSyncAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Container extends Component {
  state = {
    items: 0,
    // reset: false,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
  };

  counters = {
    1: "counter1",
    2: "counter2",
    3: "counter3",
    4: "counter4",
  };

  add = (e) => {
    // console.log(e.target.name);
    // console.log(this.counters[e.target.name]);
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [this.counters[name]]: prevState[this.counters[name]] + 1,
        // added: !!final,
      };
    });
  };

  sub = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [this.counters[name]]: prevState[this.counters[name]] - 1,
        // added: final === 0,
      };
    });
  };

  itemsAdd = () => {
    this.setState((prev) => ({
      items: prev.items + 1,
      // reset: false,
    }));
  };

  itemsSub = () => {
    this.setState((prev) => ({
      items: prev.items - 1,
      // reset: false,
    }));
  };

  reset = () => {
    this.setState({
      // reset: true,
      items: 0,
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0,
    });
  };

  render() {
    const { items, counter1, counter2, counter3, counter4 } = this.state;
    // const { reset } = this.state;
    return (
      <>
        <Header items={items} />
        {/* <Main items={items} added={added}> */}
        <div class="container">
          <button onClick={this.reset} className="reset">
            <FontAwesomeIcon
              icon={faSyncAlt}
              size="sm"
              style={{ color: "white" }}
            />
          </button>
          <Item
            add={this.add}
            sub={this.sub}
            itemsAdd={this.itemsAdd}
            itemsSub={this.itemsSub}
            name="1"
            counter={counter1}
          />
          <Item
            add={this.add}
            sub={this.sub}
            itemsAdd={this.itemsAdd}
            itemsSub={this.itemsSub}
            name="2"
            counter={counter2}
          />
          <Item
            add={this.add}
            sub={this.sub}
            itemsAdd={this.itemsAdd}
            itemsSub={this.itemsSub}
            name="3"
            counter={counter3}
          />
          <Item
            add={this.add}
            sub={this.sub}
            itemsAdd={this.itemsAdd}
            itemsSub={this.itemsSub}
            name="4"
            counter={counter4}
          />
          {/* </Main> */}
        </div>
      </>
    );
  }
}

export default Container;
