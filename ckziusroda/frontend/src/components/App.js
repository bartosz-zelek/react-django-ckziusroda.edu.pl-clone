import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
