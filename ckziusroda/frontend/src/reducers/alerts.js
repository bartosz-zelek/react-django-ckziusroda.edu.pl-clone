import { SHOW_ALERT } from "../actions/types";

const initialState = {
  alerts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return (state = [action.payload]);
    default:
      return state;
  }
}
