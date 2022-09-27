import React from "react";
import DashboardSidebar from "../DashboardSidebar";
import DashboardNavbar from "../DashboardNavbar";

const TambahMenu = ({ handleLogOut }) => {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardNavbar handleLogOut={handleLogOut} />
        <div className="tambah-wrapper">
          <h2>Tambah Menu</h2>
          <div className="tambah-input-wrapper">
            <form>
              <div className="one-wrapper">
                <div className="foto-produk-wrapper">
                  <label>Foto Produk</label>
                  <input type="file" />
                </div>
                <div className="nama-produk-wrapper">
                  <label>Nama Produk</label>
                  <input type="text" />
                </div>
              </div>
              <div className="two-wrapper">
                <div className="harga-produk-wrapper">
                  <label>Harga Produk</label>
                  <input type="text" />
                </div>
                <div className="kategori-produk-wrapper">
                  <label>Kategori Produk</label>
                  <input type="text" />
                </div>
              </div>
              <div className="desc-produk-wrapper">
                <label>Deskripsi Produk</label>
                <input type="text" />
              </div>
              <button id="upload-produk">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMenu;
