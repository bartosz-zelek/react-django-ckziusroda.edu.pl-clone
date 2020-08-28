//TODO:
// // statement is not working, even if user isAuthenticated, but page is refreshing it will redirect user to /zaloguj and next to the /
import React from "react";

import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

const SecureRoute = ({ component: Component, ...rest }) => {
  let auth = useSelector((state) => state.authentication);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return (
            <div className="container" style={{ textAlign: "center" }}>
              <div style={{ marginTop: "121px", marginBottom: "121px" }}>
                <ClipLoader />
              </div>
            </div>
          );
        } else if (auth.isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/zaloguj" />;
        }
      }}
    />
  );
};

export default SecureRoute;
