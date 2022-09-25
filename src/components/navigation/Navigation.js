import React from "react";
import "./Navigation.css";

const Navigation = ({ scroll }) => {
  return (
    <div className="header-container">
      <header>
        <h1>
          Warung<span>Acil</span>
        </h1>
        <ul>
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#kontak">Kontak</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
