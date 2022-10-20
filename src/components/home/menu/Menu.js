import React, { useEffect, useState } from "react";
import CardMenu from "./CardMenu";
import "./Menu.css";

const Menu = ({ products }) => {
  const [filters, setFilters] = useState("Semua");
  useEffect(() => {
    const semuaButton = document.getElementById("semua-button");
    const biasaButton = document.getElementById("biasa-button");
    const bestButton = document.getElementById("best-button");
    if (filters === "Semua") {
      semuaButton.style.backgroundColor = "#fff";
      biasaButton.removeAttribute("style");
      bestButton.removeAttribute("style");
    } else if (filters === "Biasa") {
      biasaButton.style.backgroundColor = "#fff";
      semuaButton.removeAttribute("style");
      bestButton.removeAttribute("style");
    } else if (filters === "Best Seller") {
      bestButton.style.backgroundColor = "#fff";
      semuaButton.removeAttribute("style");
      biasaButton.removeAttribute("style");
    }
  }, [filters]);
  return (
    <div className="menu-produk-container" id="menu">
      <div className="menu-produk-heading">
        <h2>Menu</h2>
        <div className="menu-produk-button">
          <button onClick={() => setFilters("Semua")} id="semua-button">
            Semua
          </button>
          <span>|</span>
          <button onClick={() => setFilters("Biasa")} id="biasa-button">
            Biasa
          </button>
          <span>|</span>
          <button onClick={() => setFilters("Best Seller")} id="best-button">
            Best Seller
          </button>
        </div>
      </div>
      <div className="menu-produk-content">
        {products
          .filter((check) => filters === check.kategori || filters === "Semua")
          .map((product) => (
            <CardMenu
              nama={product.nama}
              img={product.img}
              key={product.id}
              id={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
