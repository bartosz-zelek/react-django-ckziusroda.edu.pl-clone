import { combineReducers } from "redux";
import news from "./news";
import posts from "./posts";
import authentication from "./authentication";

export default combineReducers({
  news,
  posts,
  authentication,
});
