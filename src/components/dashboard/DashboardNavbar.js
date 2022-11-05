import React from "react";
import ButtonLogout from "./ButtonLogout";
import LogoDashboard from "../../assets/images/logo-navbar.svg";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ handleLogOut }) => {
  return (
    <div className="dashboard-navbar-wrapper">
      <Link to="/" title="To Home">
        <img
          src={LogoDashboard}
          alt="logo warung acil"
          width="156"
          height="55"
        />
      </Link>
      <ButtonLogout handleLogOut={handleLogOut} />
    </div>
  );
};

export default DashboardNavbar;
