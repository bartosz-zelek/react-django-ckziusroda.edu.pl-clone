import axios from "axios";

import { GET_POSTS_BY_PHRASE } from "./types";

export const getPostsByPhrase = (phrase) => (dispatch) => {
  axios
    .get(`/api/posts/search/${phrase}/`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch({
          type: GET_POSTS_BY_PHRASE,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_POSTS_BY_PHRASE,
          payload: "NO_RESULTS",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
