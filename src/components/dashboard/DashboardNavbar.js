import React from "react";
import ButtonLogout from "./ButtonLogout";

const DashboardNavbar = ({ handleLogOut }) => {
  return (
    <div className="dashboard-navbar-wrapper">
      <h1>
        Warung<span>Acil</span>
      </h1>
      <ButtonLogout handleLogOut={handleLogOut} />
    </div>
  );
};

export default DashboardNavbar;
