import axios from "axios";

import { showAlert } from "./alerts";

import { tokenConfig } from "./authentication";

import { GET_CATEGORIES, CREATE_CATEGORY } from "./types";

export const getCategories = () => (dispatch, getState) => {
  axios
    .get("/api/categories/", tokenConfig(getState))
    .then((res) => {
      if (res.data.length > 0) {
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_CATEGORIES,
          payload: "NO_RESULTS",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCategory = (category) => (dispatch, getState) => {
  axios
    .post("api/categories/", category, tokenConfig(getState))
    .then((res) => {
      dispatch(
        showAlert(
          { category_added: ["Pomyślnie dodano kategorię."] },
          "success"
        )
      );
      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(showAlert(err.response.data, "error")));
};
