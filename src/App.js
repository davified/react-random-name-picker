import React, { Component } from "react";
import Title from "./Title";
import RandomNamePicker from "./RandomNamePicker";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <RandomNamePicker />
      </div>
    );
  }
}

export default App;
