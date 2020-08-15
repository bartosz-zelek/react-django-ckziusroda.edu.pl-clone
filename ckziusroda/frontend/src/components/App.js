import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./main_page/Banner";
import { BlocksZones } from "./main_page/BlocksZones";
import News from "./main_page/News";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="container">
          <BlocksZones />
          <News />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
