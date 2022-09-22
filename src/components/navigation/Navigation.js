import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#beranda">BERANDA</a>
          </li>
          <li>
            <a href="#tentang">TENTANG</a>
          </li>
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="#pesan">PESAN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
