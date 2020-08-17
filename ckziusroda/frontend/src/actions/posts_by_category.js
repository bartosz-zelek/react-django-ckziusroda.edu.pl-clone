import axios from "axios";

import { GET_POSTS_BY_CATEGORY } from "./types";

export const getPostsByCategory = (category_slug) => (dispatch) => {
  axios
    .get(`/api/posts/${category_slug}/`)
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
