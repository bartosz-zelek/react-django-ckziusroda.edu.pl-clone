import { combineReducers } from "redux";
import news from "./news";
import posts from "./posts";
import authentication from "./authentication";
import alerts from "./alerts";

export default combineReducers({
  news,
  posts,
  authentication,
  alerts,
});
