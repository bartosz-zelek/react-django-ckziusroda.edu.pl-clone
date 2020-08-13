import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
