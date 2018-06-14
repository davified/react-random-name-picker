import React, { Component } from "react";
import math from "mathjs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: 0
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>

        <h3>{this.state.names[this.state.luckyWinnerIndex]}</h3>

        <button onClick={() => this.handleClick()}>get lucky winner!</button>
      </div>
    );
  }

  handleClick() {
    const numberOfNames = this.state.names.length
    const randomInteger = math.randomInt(numberOfNames)
    this.setState({
      luckyWinnerIndex: randomInteger
    });
  }
}

export default App;
