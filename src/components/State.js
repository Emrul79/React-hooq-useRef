import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementBtn = () => {
    this.setState({
      count: this.state.count + 2,
    });
  };
  decrementBtn = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button className="hello" onClick={this.incrementBtn}>
          +
        </button>
        <button
          className="hello2"
          onClick={this.decrementBtn}
          disabled={count <= 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
