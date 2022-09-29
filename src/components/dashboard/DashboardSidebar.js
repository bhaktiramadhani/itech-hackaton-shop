import React from "react";
import { NavLink } from "react-router-dom";
import CloseSidebar from "./CloseSidebar";
import "./dashboard.css";

const DashboardSidebar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#393a4" : "transparent",
    };
  };
  return (
    <div className="dashboard-sidebar-wrapper">
      <CloseSidebar />
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
  );
};

export default DashboardSidebar;
