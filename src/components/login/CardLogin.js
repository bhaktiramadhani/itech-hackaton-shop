import React from "react";
import "./cardlogin.css";

const CardLogin = () => {
  return (
    <div className="card-wrapper">
      <div className="card-heading">
        <h2>Masuk</h2>
      </div>
      <form>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type>Masuk</button>
        <p>
          Lupa <a href="#l">Password</a> ?
        </p>
      </form>
    </div>
  );
};

export default CardLogin;
