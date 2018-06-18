import React, { Component } from "react";
import InputForm from "./InputForm";
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
        {this.state.names.map((name, index) => {
          const isLuckyWinner = index === this.state.luckyWinnerIndex;
          return (
            <li id={isLuckyWinner ? "winner" : ""} key={index}>
              {name}
            </li>
          );
        })}
        <button onClick={() => this.handleClick()}>get lucky winner!</button>
        <InputForm addNewName={newName => this.addNewName(newName)} />
      </div>
    );
  }

  handleClick() {
    const numberOfNames = this.state.names.length;
    const randomInteger = math.randomInt(numberOfNames);
    this.setState({ luckyWinnerIndex: randomInteger });
  }

  addNewName(newName) {
    this.setState({
      names: [...this.state.names, newName]
    });
  }
}

export default RandomNamePicker;
