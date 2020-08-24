import axios from "axios";

import { GET_POSTS_BY_DATE } from "./types";

export const getPostsByDate = (month, year) => (dispatch) => {
  axios
    .get(`/api/posts/date/${year}/${month}/`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch({
          type: GET_POSTS_BY_DATE,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_POSTS_BY_DATE,
          payload: "NO_RESULTS",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
