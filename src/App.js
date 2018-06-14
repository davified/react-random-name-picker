import React, { Component } from "react";
import RandomButton from "./RandomButton";
import LoadingIcon from "./LoadingIcon";
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
        <h1 id="app-title">hello random name picker</h1>
        {this.state.isLoading ? (
          <LoadingIcon />
        ) : (
          <ul>
            {this.state.names.map((name, i) => {
              const isWinner = this.state.luckyWinnerIndex === i;
              return <li id={isWinner ? "winner" : ""}>{name}</li>;
            })}
          </ul>
        )}

        <RandomButton handleClick={() => this.handleClick()} />
      </div>
    );
  }

  handleClick() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      const numberOfNames = this.state.names.length;
      const randomInteger = math.randomInt(numberOfNames);
      this.setState({
        luckyWinnerIndex: randomInteger,
        isLoading: false
      });
    }, 500);
  }
}

export default App;
/* alternative solution: */
// if (this.state.luckyWinnerIndex === i) {
//   return <li id="winner">{name}</li>;
// } else {
//   return <li id="">{name}</li>;
// }
