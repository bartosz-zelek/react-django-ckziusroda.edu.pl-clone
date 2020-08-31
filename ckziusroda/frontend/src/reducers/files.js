import { UPLOAD_FILE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        uploaded_file: action.payload,
      };
    default:
      return state;
  }
}
