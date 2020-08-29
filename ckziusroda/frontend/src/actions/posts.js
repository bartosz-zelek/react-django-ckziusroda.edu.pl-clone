import axios from "axios";

import {
  GET_POST_BY_SLUG,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_DATE,
  GET_POSTS_BY_PHRASE,
  GET_CATEGORIES,
  CREATE_POST,
} from "./types";

import { tokenConfig } from "./authentication";
import { showAlert } from "./alerts";

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

export const createPost = (post) => (dispatch, getState) => {
  axios
    .post("/api/manipulate_posts/", post, tokenConfig(getState))
    .then((res) => {
      dispatch(
        showAlert({ post_created: ["Pomyślnie dodano post."] }, "success")
      );
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(showAlert(err.response.data, "error")));
};
