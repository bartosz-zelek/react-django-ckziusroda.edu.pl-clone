// TODO:
// [] take care about authorization

import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ClipLoader from "react-spinners/ClipLoader";

import { getCategories } from "../../actions/posts";

const CreatePost = () => {
  console.log("jestem tu");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.posts.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    console.log(category, title, content);
  };
  if (categories && categories.length > 0) {
    if (categories !== "NO_RESULTS") {
      setCategory(categories[0].id);
      return (
        <div className="container mt-5">
          <div
            style={{ marginLeft: "12%", marginRight: "12%" }}
            className="border border-primary rounded p-4"
          >
            <h1 className="text-center">Dodaj post</h1>
            <br />
            <form onSubmit={(e) => handeSubmit(e)}>
              <div className="form-group">
                <label htmlFor="selectCategory">Kategoria:</label>
                <br />
                <select
                  className="form-control bg-light"
                  style={{ maxWidth: "200px", display: "inline-block" }}
                  id="selectCategory"
                >
                  {/* {categories.map((category) => (
                <option
                  value={category.id}
                  onClick={(e) => setCategory(e.target.value)}
                >
                  {category.name}
                </option>
              ))} */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputTitle">Tytuł:</label>
                <input
                  className="form-control"
                  id="inputTitle"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputContent">Treść:</label>
                <textarea
                  className="form-control"
                  id="inputContent"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-primary">
                  Zapisz
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      <span>redirect to create category</span>;
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

export default CreatePost;
