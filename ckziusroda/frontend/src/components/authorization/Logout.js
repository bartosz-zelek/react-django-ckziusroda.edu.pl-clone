import React from "react";

import { useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";

import { logout } from "../../actions/authentication";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());

  return <Redirect to="/" />;
};

export default Logout;
