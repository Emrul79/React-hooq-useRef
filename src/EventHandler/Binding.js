import React, { Component } from "react";

export default class Binding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
        this.increasebtn = this.increasebtn.bind(this)
    }
    increasebtn() {
        this.setState({
          count:this.state.count+1,
      })
  }

  render() {
    return (
      <div>
        <h1>  Count: {this.state.count}</h1>

        <button onClick={this.increasebtn}>Increase</button>
      </div>
    );
  }
}
