import axios from "axios";

import { GET_POST_BY_SLUG } from "./types";

export const getPostBySlug = (category_slug, post_slug) => (dispatch) => {
  axios
    .get(`/api/posts/${category_slug}/${post_slug}/`)
    .then((res) => {
      if (res.data.length > 0){
      dispatch({
        type: GET_POST_BY_SLUG,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_POST_BY_SLUG,
        payload: "NO_RESULTS",
      });
    }
    })
    .catch((err) => {
      console.log(err);
    });
};
