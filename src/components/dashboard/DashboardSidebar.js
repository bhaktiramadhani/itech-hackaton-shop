import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboard.css";

const DashboardSidebar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#393a4" : "transparent",
    };
  };

  const handleCLoseSidebar = () => {
    document.querySelector(".dashboard-sidebar-wrapper").style.display = "none";
    document.querySelector(".dashboard-main").style.marginLeft = "0";
    document.querySelector(".button-open-sidebar").style.display = "block";
  };

  const handleOpenSidebar = () => {
    document.querySelector(".dashboard-sidebar-wrapper").style.display = "flex";
    document.querySelector(".dashboard-main").style.marginLeft = "295px";
    document.querySelector(".button-open-sidebar").style.display = "none";
  };
  return (
    <>
      <div className="dashboard-sidebar-wrapper">
        <button className="sidebar-close" onClick={handleCLoseSidebar}>
          x
        </button>
        <hr />
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <NavLink to="/dashboard" style={navLinkStyles}>
              Dashboard
            </NavLink>
            <NavLink to="/tambah" style={navLinkStyles}>
              Tambah Menu
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="button-open-wrapper">
        <button className="button-open-sidebar" onClick={handleOpenSidebar}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default DashboardSidebar;
