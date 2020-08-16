import { GET_POSTS_BY_CATEGORY } from "../actions/types";

const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
