import {
  GET_POSTS_BY_CATEGORY,
  GET_POST_BY_SLUG,
  GET_POSTS_BY_PHRASE,
  GET_POSTS_BY_DATE,
  GET_CATEGORIES,
  CREATE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  post: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
    case GET_POSTS_BY_PHRASE:
    case GET_POSTS_BY_DATE:
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
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        created_post: action.payload,
      };

    default:
      return state;
  }
}
