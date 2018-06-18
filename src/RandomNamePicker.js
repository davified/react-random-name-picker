import React, { Component } from "react";
import InputForm from "./InputForm";
import NameList from "./NameList";
import math from "mathjs";

class RandomNamePicker extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }

  render() {
    return (
      <div>
        <NameList
          names={this.state.names}
          luckyWinnerIndex={this.state.luckyWinnerIndex}
        />
        <button onClick={() => this.handleClick()}>get lucky winner!</button>
        <InputForm addName={name => this.addName(name)} />
      </div>
    );
  }

  handleClick() {
    const numberOfNames = this.state.names.length;
    const randomInteger = math.randomInt(numberOfNames);
    this.setState({ luckyWinnerIndex: randomInteger });
  }

  addName(name) {
    this.setState({
      names: [...this.state.names, name]
    });
  }
}

export default RandomNamePicker;
