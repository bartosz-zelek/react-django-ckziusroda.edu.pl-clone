import { GET_CATEGORIES, CREATE_CATEGORY } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [],
        category_created: true,
      };
    default:
      return state;
  }
}
