// blank and null to title and content - news
// HTML styles when creating news in django admin

import React, { Component } from "react";

export class News extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>AKTUALNOŚCI</h1>
      </div>
    );
  }
}

export default News;
