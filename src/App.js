import React, { Component } from "react";
import "./App.scss";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Button>Test</Button>
      </div>
    );
  }
}

export default App;
