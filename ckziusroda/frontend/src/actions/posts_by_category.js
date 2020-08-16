import axios from "axios";

import { GET_POSTS_CATEGORY, GET_POSTS_BY_CATEGORY } from "./types";

export const getPostsByCategory = (category) => (dispatch) => {
  axios
    .get(`/api/posts/${category}`)
    .then((res) => {
      dispatch({
        type: GET_POSTS_BY_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
