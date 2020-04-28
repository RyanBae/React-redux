import React, { Component } from "react";
import Counter from "../components/Counter";
import CounterComponent from "./CounterContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterComponent />
      </div>
    );
  }
}

export default App;
