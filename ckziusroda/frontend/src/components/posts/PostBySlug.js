//TODO:
// edit button? or like click eg. F8 to go to admin edit page
// posts on specific anth and year
// upload files
// do a vertical menu for <=medium devices
// repair responsibility for small devices
// change title when on different subpages
// some Links in header redirect directly to post in some category

import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPostBySlug } from "../../actions/post_by_slug";

import renderHTML from "react-render-html";

import Calendar from "react-calendar";

export const PostBySlug = (match) => {
  const category_slug = match.match.params.category_slug;
  const post_slug = match.match.params.post_slug;
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostBySlug(category_slug, post_slug));
  }, [post_slug, category_slug]);

  const state = {
    date: new Date(),
  };

  const onChange = (date) => this.setState({ date });

  if (post.length > 0) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            {post.map((post_obj) => (
              <div key={post_obj.id} className="border-bottom mb-5">
                <h2>{post_obj.title}</h2>
                <span className="text-muted">
                  📅 {post_obj.created_date} {"\u00A0"} 🙍‍♂️{" "}
                  {post_obj.owner_fullname}
                </span>
                <div style={{ textAlign: "justify" }} className="mt-4">
                  {renderHTML(post_obj.markdown_content_full)}
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>
                    {post_obj.images.map((image) => renderHTML(image.render))}
                  </p>
                  <p>
                    {post_obj.videos.map((video) => renderHTML(video.render))}
                  </p>
                </div>
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
    return (
      <div className="container mt-5">
        <h1 style={{ textAlign: "center" }} className="mt-5">
          Ups...
          <br />
          <span style={{ textAlign: "center", fontSize: "20px" }}>
            Ten post nie istnieje.
          </span>
        </h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts.post,
});

export default connect(mapStateToProps, { getPostBySlug })(PostBySlug);
