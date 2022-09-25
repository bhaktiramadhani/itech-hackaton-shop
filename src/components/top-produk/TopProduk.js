import React from "react";
import CardTopProduk from "./CardTopProduk";
import "./TopProduk.css";
import produk from "../../assets/images/produk.png";

const TopProduk = () => {
  return (
    <div className="top-produk-container">
      <h2>Best Seller</h2>
      <div className="card-top-wrapper">
        <CardTopProduk
          img={produk}
          nama="Ayam Goreng Lengkuas"
          price="RP.18.000/porsi"
        />
        <CardTopProduk
          img={produk}
          nama="Ayam Goreng Lengkuas"
          price="RP.18.000/porsi"
        />
        <CardTopProduk
          img={produk}
          nama="Ayam Goreng Lengkuas"
          price="RP.18.000/porsi"
        />
      </div>
    </div>
  );
};

export default TopProduk;
