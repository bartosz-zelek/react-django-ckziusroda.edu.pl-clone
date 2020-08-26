import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { login } from "../../actions/authentication";

const Login = () => {
  window.document.title = "Zaloguj się – CKZiU";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="container mt-5">
      <div
        style={{ marginLeft: "12%", marginRight: "12%" }}
        className="border border-primary rounded p-4"
      >
        <h1 className="text-center">Moderatorzy strony</h1>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputUsername">Nazwa użytkownika:</label>
            <input
              className="form-control"
              id="inputUsername"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Hasło:</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const

export default Login;
