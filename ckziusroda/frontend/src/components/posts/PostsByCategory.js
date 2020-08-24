import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPostsByCategory } from "../../actions/posts_by_category";
import { Pagination } from "./Pagination";

import { Link } from "react-router-dom";

import renderHTML from "react-render-html";

import SetCalendar from "../common/SetCalendar";
import EmptyPage from "../common/EmptyPage";

import ClipLoader from "react-spinners/ClipLoader";

export const PostsByCategory = (match) => {
  const category_slug = match.match.params.category_slug;
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getPostsByCategory(category_slug));
  }, [category_slug]);

  useEffect(() => {
    setTimeout(() => {
      $(".vertical-nav").addClass("hidden");
    }, 0);
  });

  useEffect(() => {
    setTimeout(() => {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    }, 0);
  }, [currentPage]);

  if (posts.length > 0) {
    if (posts !== "NO_RESULTS") {
      window.document.title = `${posts[0].category_name} – Środa Wielkopolska`;

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-5">
                Kategoria: {currentPosts[0].category_name}
              </h1>
              {currentPosts.map((post) => (
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
                    to={post.category_slug + "/" + post.slug + "/"}
                  >
                    CZYTAJ WIĘCEJ...
                  </Link>
                </div>
              ))}
              <div className="d-flex justify-content-center mb-5">
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
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
      return <EmptyPage h1="Ups..." h2="Ta kategoria jest pusta 🙄" />;
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

export default connect(null, { getPostsByCategory })(PostsByCategory);
