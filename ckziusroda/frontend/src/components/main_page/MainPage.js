import React, { Component } from "react";
import Banner from "./Banner";
import BlocksZones from "./BlocksZones";
import News from "./News";

export class MainPage extends Component {
  render() {
    return (
      <>
        <Banner />
        <div className="container">
          <BlocksZones />
          <News />
        </div>
      </>
    );
  }
}

export default MainPage;
