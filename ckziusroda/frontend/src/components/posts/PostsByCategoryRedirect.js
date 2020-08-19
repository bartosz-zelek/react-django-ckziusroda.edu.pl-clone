import React from "react";
import { Redirect } from "react-router-dom";
import PostsByCategory from "./PostsByCategory";

export default function PostsByCategoryRedirect(match) {
  return <PostsByCategory category_slug={match.match.params.category_slug} />;
}
