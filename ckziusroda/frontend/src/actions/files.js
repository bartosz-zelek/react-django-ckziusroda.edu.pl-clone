import axios from "axios";

import { showAlert } from "./alerts";

import { tokenConfig } from "./authentication";

import { UPLOAD_FILE } from "./types";

export const uploadFile = (file) => (dispatch, getState) => {
  axios
    .post("/api/file/", file, tokenConfig(getState))
    .then((res) => {
      dispatch(
        showAlert({ file_uploaded: ["Pomyślnie przesłano plik."] }, "success")
      );
      dispatch({
        type: UPLOAD_FILE,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(showAlert(err.response.data, "error")));
};
