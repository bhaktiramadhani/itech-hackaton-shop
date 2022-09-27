import React from "react";
import { Link } from "react-router-dom";
import CloseSidebar from "./CloseSidebar";
import "./dashboard.css";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar-wrapper">
      <CloseSidebar />
      <div className="sidebar-content">
        <ul className="sidebar-list">
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/dashboard/tambah"}>Tambah</Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
