import React, { useState } from "react";

const Login = () => {
  window.document.title = "Zaloguj się – CKZiU";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
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
            <label htmlFor="inputLogin">Login:</label>
            <input
              className="form-control"
              id="linputLogin"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
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

export default Login;
