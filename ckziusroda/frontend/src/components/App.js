import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  render() {
    return <h1>Initial</h1>;
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
