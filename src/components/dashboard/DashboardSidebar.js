import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import gambarAdmin from "../../assets/images/logo-admin.svg";

const DashboardSidebar = () => {
  const handleCLoseSidebar = () => {
    document.querySelector(".dashboard-sidebar-wrapper").style.display = "none";
    document.querySelector(".dashboard-main").style.marginLeft = "0";
    document.querySelector(".button-open-sidebar").style.display = "block";
  };

  const handleOpenSidebar = () => {
    const dashboardWrapper = document.querySelector(
      ".dashboard-sidebar-wrapper"
    );
    dashboardWrapper.style.display = "flex";
    document.querySelector(".button-open-sidebar").style.display = "none";
    document.querySelector(".dashboard-main").style.marginLeft = "295px";
  };
  return (
    <>
      <div className="dashboard-sidebar-wrapper">
        <div className="sidebar-top">
          <div className="sidebar-login-wrapper">
            <img src={gambarAdmin} alt="gambar admin" width="43" height="41" />
            <div>
              <p>Anda Log-in sebagai</p>
              <p>Admin</p>
            </div>
          </div>
          <button className="sidebar-close" onClick={handleCLoseSidebar}>
            x
          </button>
        </div>
        <hr />
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <Link
              to="/dashboard"
              style={{
                backgroundColor:
                  window.location.pathname === "/dashboard"
                    ? "#393a4"
                    : "transparent",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/tambah"
              style={{
                backgroundColor:
                  window.location.pathname === "/dashboard/tambah"
                    ? "#393a4"
                    : "transparent",
              }}
            >
              Tambah Menu
            </Link>
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
