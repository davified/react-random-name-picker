import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.handleChange(event)}
        />
        <button>Add name</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newName = this.state.inputValue;

    this.props.addName(newName);

    this.setState({
      inputValue: ""
    });
  }
}

export default InputForm;
