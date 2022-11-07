import React from "react";
import { Link } from "react-router-dom";

const ButtonLogout = ({ handleLogOut }) => {
  return (
    <div className="link-dashboard-wrapper">
      <Link to="/" title="To Home">
        HOME
      </Link>
      <button className="button-logout" onClick={handleLogOut}>
        Keluar
      </button>
    </div>
  );
};

export default ButtonLogout;
