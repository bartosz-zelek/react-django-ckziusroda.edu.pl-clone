import axios from "axios";

import { GET_NEWS } from "./types";

export const getNews = () => (dispatch) => {
  axios
    .get("/api/news/")
    .then((res) => {
      dispatch({
        type: GET_NEWS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
