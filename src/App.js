import React, { Component } from "react";
import Prefix from "./Prefix";
import Suffix from "./Suffix";
import "./App.css";

class App extends Component {
  state = {
    clicked: false
  };
  render() {
    const clickHandler = () => {
      this.setState({ clicked: true });
    };
    return (
      <div className="App">
        <h2>
          {!this.state.clicked && "Would you like a compliment?"}
          {this.state.clicked && "You are"}
          {this.state.clicked && <Prefix />}
          {this.state.clicked && <Suffix />}
        </h2>
        <button className="btn" onClick={clickHandler}>
          {this.state.clicked
            ? "Give me another compliment!"
            : "Give me a compliment!"}
        </button>
      </div>
    );
  }
}

export default App;
