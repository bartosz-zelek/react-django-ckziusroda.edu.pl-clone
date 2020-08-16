import { combineReducers } from "redux";
import news from "./news";
import posts from "./posts";

export default combineReducers({
  news,
  posts,
});
