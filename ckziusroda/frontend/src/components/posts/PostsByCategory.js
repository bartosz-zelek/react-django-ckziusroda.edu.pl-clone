import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPostsByCategory } from "../../actions/posts_by_category";

import { Link } from "react-router-dom";

import renderHTML from "react-render-html";

import Calendar from "react-calendar";

export const PostsByCategory = (match) => {
  const category_slug = match.match.params.category_slug;
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsByCategory(category_slug));
  }, [category_slug]);
  useEffect(() => {
    setTimeout(() => {
      $(".vertical-nav").addClass("hidden");
    }, 0);
  });
  const state = {
    date: new Date(),
  };

  const onChange = (date) => this.setState({ date });
  if (posts.length > 0) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-5">Kategoria: {posts[0].category_name}</h1>
            {posts.map((post) => (
              <div key={post.id} className="border-bottom mb-5">
                <h2>{post.title}</h2>
                <span className="text-muted">
                  📅 {post.created_date} {"\u00A0"} 🙍‍♂️ {post.owner_fullname}
                </span>
                <div style={{ textAlign: "justify" }} className="mt-4">
                  {renderHTML(post.markdown_content)}
                </div>
                <Link
                  className="btn btn-primary mb-3"
                  to={category_slug + "/" + post.slug + "/"}
                >
                  CZYTAJ WIĘCEJ...
                </Link>
              </div>
            ))}
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div>
              <Calendar onChange={onChange} value={state.date} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPostsByCategory })(
  PostsByCategory
);
