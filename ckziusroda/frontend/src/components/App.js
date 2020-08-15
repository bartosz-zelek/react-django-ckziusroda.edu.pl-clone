import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import MainPage from "./main_page/MainPage";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <MainPage />
          <Footer />
        </>
      </Provider>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
