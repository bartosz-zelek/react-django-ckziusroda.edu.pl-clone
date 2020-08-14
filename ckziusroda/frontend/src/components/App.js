import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./layout/Banner";
import { BlocksZones } from "./layout/BlocksZones";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="container">
          <BlocksZones />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
