import React from "react";
import CardMenu from "./CardMenu";
import "./Menu.css";
import produk from "../../../assets/images/produk.png";

const Menu = () => {
  return (
    <div className="menu-produk-container">
      <div className="menu-produk-heading">
        <h2>Menu</h2>
        <div className="menu-produk-button">
          <button>Semua</button>
          <span>|</span>
          <button>Biasa</button>
          <span>|</span>
          <button>Best Seller</button>
        </div>
      </div>
      <div className="menu-produk-content">
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
        <CardMenu nama="Ayam goreng lengkuas" img={produk} />
      </div>
    </div>
  );
};

export default Menu;
