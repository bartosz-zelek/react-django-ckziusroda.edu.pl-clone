import { GET_POSTS_BY_CATEGORY, GET_POST_BY_SLUG } from "../actions/types";

const initialState = {
  posts: [],
  post: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_BY_SLUG:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
