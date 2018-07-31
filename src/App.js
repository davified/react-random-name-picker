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
      names: [],
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

  fetchNames = async () => {
    const response = await fetch(
      "http://jumpstart-blogging-api.herokuapp.com/users"
    );
    const data = await response.json();

    const names = data.map(person => person.username);
    this.setState({
      names: names
    });
  };

  async componentDidMount() {
    await this.fetchNames();
  }

  handleClick() {
    this.setState({ isLoading: true });
    // console.log(math.randomInt);

    const numberOfNames = this.state.names.length;
    const randomInteger = math.randomInt(numberOfNames);
    this.setState({
      luckyWinnerIndex: randomInteger,
      isLoading: false
    });
  }
}

export default App;
