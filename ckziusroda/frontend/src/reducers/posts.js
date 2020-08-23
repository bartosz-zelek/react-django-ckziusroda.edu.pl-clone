import {
  GET_POSTS_BY_CATEGORY,
  GET_POST_BY_SLUG,
  GET_POSTS_BY_PHRASE,
} from "../actions/types";

const initialState = {
  posts: [],
  post: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        post: [],
        posts: action.payload,
      };
    case GET_POSTS_BY_PHRASE:
      return {
        ...state,
        post: [],
        posts: action.payload,
      };
    case GET_POST_BY_SLUG:
      return {
        ...state,
        posts: [],
        post: action.payload,
      };
    default:
      return state;
  }
}
