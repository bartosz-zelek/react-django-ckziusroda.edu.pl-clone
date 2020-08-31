import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { uploadFile } from "../../actions/files";

const UploadFile = () => {
  const dispatch = useDispatch();
  const doc_url = useSelector((state) => state.files.uploaded_file);

  const [file, setFile] = useState([]);
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (file.length > 0) {
    const _file = new FormData();
    _file.append("document", file[0]);
    dispatch(uploadFile(_file));
    // } else console.log("err");
  };

  useEffect(() => {
    if (doc_url) {
      setUrl(doc_url.document);
    }
  }, [doc_url]);

  return (
    <div className="container mt-5">
      <div
        style={{ marginLeft: "12%", marginRight: "12%" }}
        className="border border-primary rounded p-4"
      >
        <h1 className="text-center">Prześlij plik</h1>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputFile">Plik:</label>
            <input
              type="file"
              className="form-control"
              id="inputFile"
              onChange={(e) => setFile([e.target.files[0]])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputURL">Link:</label>
            <input
              className="form-control"
              id="inputURL"
              value={url}
              readOnly
              placeholder="Po przesłaniu pliku tu otrzymasz link do niego."
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary">
              Prześlij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
