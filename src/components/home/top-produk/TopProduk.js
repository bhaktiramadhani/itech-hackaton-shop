import React from "react";
import CardTopProduk from "./CardTopProduk";
import "./TopProduk.css";

const TopProduk = ({ products }) => {
  return (
    <div className="top-produk-container">
      <h2>Best Seller</h2>
      <div className="card-top-wrapper">
        {products.length > 0 ? (
          <CardTopProduk products={products} />
        ) : (
          <div className="loader-wrapper-top-produk">
            <span className="loader-top-produk"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopProduk;
