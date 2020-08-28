// TODO:
// [] take care about authorization

import React from "react";

const CreatePost = () => {
  return (
    <div className="container mt-5">
      <div
        style={{ marginLeft: "12%", marginRight: "12%" }}
        className="border border-primary rounded p-4"
      >
        <h1 className="text-center">Dodaj post</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="selectCategory">Kategoria:</label>
            <br />
            <select
              className="form-control bg-light"
              style={{ maxWidth: "200px", display: "inline-block" }}
              id="selectCategory"
            >
              <option value="opcja-1">Opcja 1</option>
              <option calue="opcja-2">Opcja 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputTitle">Tytuł:</label>
            <input className="form-control" id="inputTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="inputContent">Treść:</label>
            <textarea className="form-control" id="inputContent" />
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
};

export default CreatePost;
