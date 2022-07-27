import React, { Component } from "react";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";

export default class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }
  render() {
    const { isLogedIn } = this.state;

    return <div>{isLogedIn ? <Homepage /> : <Loginpage />}</div>;
  }
}
