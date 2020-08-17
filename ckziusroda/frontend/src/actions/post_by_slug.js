import axios from "axios";

import { GET_POST_BY_SLUG } from "./types";

export const getPostBySlug = (category_slug, post_slug) => (dispatch) => {
  axios
    .get(`/api/posts/${category_slug}/${post_slug}/`)
    .then((res) => {
      dispatch({
        type: GET_POST_BY_SLUG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
