import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

import { showAlert } from "../../actions/alerts";

import { createPost } from "../../actions/posts";
import { getCategories } from "../../actions/categories";

const CreatePost = () => {
  const dispatch = useDispatch();

  const created_post = useSelector((state) => state.posts.created_post);
  const redirect_to_created_post = (cp) => {
    return <Redirect to={`posty/${cp.category_slug}/${cp.slug}`} />;
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector((state) => state.categories.categories);

  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [videoLinks, setVideoLinks] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const _data = new FormData();
    _data.append("category", category);
    _data.append("title", title);
    _data.append("content", content);
    _data.append("videoLinks", videoLinks);
    _data.append("slug", "");

    const images_length = parseInt(images.length);
    [...Array(images_length)].map((x, i) => {
      _data.append("images", images[i], images[i].name);
    });

    dispatch(createPost(_data));
  };

  if (!created_post) {
    if (categories) {
      if (categories !== "NO_RESULTS") {
        return (
          <div className="container mt-5">
            <div
              style={{ marginLeft: "12%", marginRight: "12%" }}
              className="border border-primary rounded p-4"
            >
              <h1 className="text-center">Dodaj post</h1>
              <br />
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="selectCategory">Kategoria*:</label>
                  <br />
                  <select
                    className="form-control bg-light"
                    style={{ maxWidth: "200px", display: "inline-block" }}
                    id="selectCategory"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Wybierz kategorię
                    </option>
                    {categories.map((category) => (
                      <option
                        value={category.id}
                        onClick={(e) => setCategory(e.target.value)}
                        key={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputTitle">Tytuł*:</label>
                  <input
                    className="form-control"
                    id="inputTitle"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputContent">Treść*:</label>
                  <textarea
                    className="form-control"
                    id="inputContent"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputFiles">Zdjęcia:</label>
                  <input
                    type="file"
                    multiple
                    className="form-control"
                    id="inputFiles"
                    accept="image/*"
                    onChange={(e) => setImages([...e.target.files])}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputVideo">Linki wideo:</label>
                  <input
                    className="form-control"
                    id="inputVideo"
                    onChange={(e) => setVideoLinks(e.target.value)}
                    value={videoLinks}
                    placeholder="Wstaw linki do filmów po przecinku."
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
        dispatch(
          showAlert(
            {
              no_categories: [
                "Brak kategorii. Aby dodać post utwórz pierwszą kategorię.",
              ],
            },
            "warning"
          )
        );
        return <Redirect to="dodaj-kategorie" />;
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
  } else {
    return redirect_to_created_post(created_post);
  }
};

export default CreatePost;
