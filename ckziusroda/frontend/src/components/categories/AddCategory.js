import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { showAlert } from "../../actions/alerts";
import { addCategory } from "../../actions/categories";

const AddCategory = () => {
  const dispatch = useDispatch();
  const category_created = useSelector(
    (state) => state.categories.category_created
  );
  const categories = useSelector((state) => state.categories.categories);

  // if (categories === "NO_RESULTS") {
  //   dispatch(
  //     showAlert({
  //       no_categories: ["Brak kategorii. Najpierw musisz utworzyć kategorię."],
  //     })
  //   );
  // }

  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ name: categoryName }));
  };

  useEffect(() => {
    if (category_created) {
      setCategoryName("");
    }
  }, [category_created]);

  return (
    <div className="container mt-5">
      <div
        style={{ marginLeft: "12%", marginRight: "12%" }}
        className="border border-primary rounded p-4"
      >
        <h1 className="text-center">Dodaj kategorię</h1>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputCategoryName">Nazwa kategorii:</label>
            <input
              className="form-control"
              id="inputCategoryName"
              onChange={(e) => setCategoryName(e.target.value)}
              value={categoryName}
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
};

export default AddCategory;
