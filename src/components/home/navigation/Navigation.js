import React, { useState } from "react";
import "./navigation.css";
import LogoNavigation from "../../../assets/images/logo-nav-home.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [linked, setLinked] = useState(null);
  const handleHamburger = () => {
    const ul = document.querySelector("#nav");
    ul.classList.toggle("slide");
  };
  return (
    <div className="header-container">
      <header>
        <Link to="/" className="logo-home">
          <img
            src={LogoNavigation}
            alt="logo warung acil"
            width="173"
            height="55"
          />
        </Link>
        <div>
          <ul id="nav">
            <li>
              <a
                href="#beranda"
                onClick={() => setLinked("Beranda")}
                style={{ color: linked === "Beranda" && "#FF793F" }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={() => setLinked("Menu")}
                style={{ color: linked === "Menu" && "#FF793F" }}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                onClick={() => setLinked("Kontak")}
                style={{ color: linked === "Kontak" && "#FF793F" }}
              >
                Kontak
              </a>
            </li>
            <li>
              <Link to="/login">Admin</Link>
            </li>
          </ul>
          <div className="menu-toggle">
            <input type="checkbox" onClick={handleHamburger} />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
