import { SHOW_ALERT } from "./types";

export const showAlert = (msg, type) => {
  return {
    type: SHOW_ALERT,
    payload: { msg, type },
  };
};
