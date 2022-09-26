import React from "react";
import ButtonLogout from "./ButtonLogout";
import CloseSidebar from "./CloseSidebar";
import "./dashboard.css";
import DashboardCard from "./DashboardCard";

const Dashboard = ({ handleLogOut }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar-wrapper">
        <CloseSidebar />
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <li>Dashboard</li>
            <li>Tambah Menu</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-navbar-wrapper">
          <h1>
            Warung<span>Acil</span>
          </h1>
          <ButtonLogout handleLogOut={handleLogOut} />
        </div>
        <div className="dashboard-main-wrapper">
          <h2>Dashboard</h2>
          <div className="dashboard-main-best-seller">
            <h3>Best Seller</h3>
            <div className="dashboard-menu-wrapper">
              <DashboardCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
