import React, { Component } from "react";
import RandomButton from "./RandomButton";
import LoadingIcon from "./LoadingIcon";
import NameList from "./NameList";
import Title from "./Title";
import math from "mathjs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        <Title />
        {this.state.isLoading ? (
          <LoadingIcon />
        ) : (
          <NameList
            names={this.state.names}
            luckyWinnerIndex={this.state.luckyWinnerIndex}
          />
        )}
        <RandomButton handleClick={() => this.handleClick()} />
      </div>
    );
  }

  handleClick() {
    this.setState({ isLoading: true });
    // setTimeout(() => {  // uncomment the 2 commented lines to see the loading effect
    const numberOfNames = this.state.names.length;
    const randomInteger = math.randomInt(numberOfNames);
    this.setState({
      luckyWinnerIndex: randomInteger,
      isLoading: false
    });
    // }, 500);
  }
}

export default App;
