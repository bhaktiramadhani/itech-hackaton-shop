import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [linked, setLinked] = useState(null);
  const handleHamburger = () => {
    const ul = document.querySelector("#nav");
    const text = document.querySelector(".hero-text-children h1 span");
    ul.classList.toggle("slide");
    text.classList.toggle("text");
  };
  return (
    <div className="header-container">
      <header>
        <h1>
          Warung<span>Acil</span>
        </h1>
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
          </ul>
          <div class="menu-toggle">
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
