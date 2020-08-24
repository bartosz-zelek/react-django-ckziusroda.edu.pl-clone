//TODO:
// [x] edit button? or like click eg. F8 to go to admin edit page
// [x] posts on specific month and year
// [x] upload files
// [x] do a vertical menu for <=medium devices
// [x] repair responsibility for small devices
// [x] change title when on different subpages
// [x] pagiantion
// *some Links in header redirect directly to post in some category - will be solved during the completion of the page
// [x] implement searching

import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPostBySlug } from "../../actions/post_by_slug";

import renderHTML from "react-render-html";

import SetCalendar from "../common/SetCalendar";
import EmptyPage from "../common/EmptyPage";

import ClipLoader from "react-spinners/ClipLoader";

export const PostBySlug = (match) => {
  const category_slug = match.match.params.category_slug;
  const post_slug = match.match.params.post_slug;
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostBySlug(category_slug, post_slug));
  }, [post_slug, category_slug]);

  useEffect(() => {
    setTimeout(() => {
      $(".vertical-nav").addClass("hidden");
    }, 0);
  });

  if (post.length > 0) {
    if (post !== "NO_RESULTS") {
      window.document.title = `${post[0].title} – Środa Wielkopolska`;

      document.onkeypress = function (e) {
        e = e || window.event;
        if (e.charCode == 96) {
          window.open(
            `${window.location.origin}/admin/posts/post/${post[0].id}/change/`
          );
        }
      };

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
                  {post_obj.optional_authors ? (
                    <p className="text-right text-muted">
                      /* {post_obj.optional_authors} */
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div>
                <SetCalendar />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <EmptyPage h1="Ups..." h2="Ten post nie istnieje 🙄" />;
    }
  } else {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ marginTop: "121px", marginBottom: "121px" }}>
          <ClipLoader />
        </div>
      </div>
    );
  }
};

export default connect(null, { getPostBySlug })(PostBySlug);
