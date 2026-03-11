import React, { Component } from "react";

class count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementcount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementcount()}>increment</button>
      </div>
    );
  }
}

export default count;
