//TODO:
// [] catching errors

import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from "./types";

import { showAlert } from "./alerts";

export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login/", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(showAlert(err.response.data, "error"));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => (dispatch, getState) => {
  // body as null
  axios
    .post("api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadUser = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  if (config) {
    dispatch({ type: USER_LOADING });
    axios
      .get("/api/auth/user", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_ERROR,
        });
      });
  }
};

export const tokenConfig = (getState) => {
  const token = getState().authentication.token;

  if (!token) {
    return null;
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };

  return config;
};
