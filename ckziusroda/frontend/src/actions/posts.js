import axios from "axios";

import {
  GET_POST_BY_SLUG,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_DATE,
  GET_POSTS_BY_PHRASE,
} from "./types";

export const getPostBySlug = (category_slug, post_slug) => (dispatch) => {
  axios
    .get(`/api/posts/${category_slug}/${post_slug}/`)
    .then((res) => {
      if (res.data.length > 0) {
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

export const getPostsByCategory = (category_slug) => (dispatch) => {
  axios
    .get(`/api/posts/${category_slug}/`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch({
          type: GET_POSTS_BY_CATEGORY,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_POSTS_BY_CATEGORY,
          payload: "NO_RESULTS",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

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
