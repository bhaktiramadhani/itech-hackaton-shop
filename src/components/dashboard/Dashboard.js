import React, { useEffect, useState } from "react";
import "./dashboard.css";
import DashboardCard from "./DashboardCard";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { db } from "../../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import garis from "../../assets/images/garis.png";
import DashboardFooter from "./DashboardFooter";

const Dashboard = ({ handleLogOut }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollectionRef = collection(db, "products");
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardNavbar handleLogOut={handleLogOut} />
        <div className="dashboard-main-wrapper">
          <h2>Dashboard</h2>
          <div className="dashboard-main-kategori-container">
            <div className="dashboard-main-kategori">
              <div className="heading-main-kategori">
                <img src={garis} alt="garis" id="garis" />
                <h3>Best Seller</h3>
              </div>
              <div className="dashboard-menu-wrapper">
                <DashboardCard products={products} kategori="Best Seller" />
              </div>
            </div>
            <div className="dashboard-main-kategori">
              <div className="heading-main-kategori">
                <img src={garis} alt="garis" id="garis" />
                <h3>Biasa</h3>
              </div>
              <div className="dashboard-menu-wrapper">
                <DashboardCard products={products} kategori="Biasa" />
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
