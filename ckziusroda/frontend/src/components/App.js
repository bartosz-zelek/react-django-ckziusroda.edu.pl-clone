import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import MainPage from "./main_page/MainPage";
import PostsByCategory from "./posts/PostsByCategory";
import PostBySlug from "./posts/PostBySlug";

import "react-calendar/dist/Calendar.css";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route
                exact
                path="/posty/:category_slug/"
                component={PostsByCategory}
              />
              <Route
                exact
                path="/posty/:category_slug/:post_slug"
                component={PostBySlug}
              />
            </Switch>
            <Footer />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
