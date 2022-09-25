import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-text-container">
      <div className="hero-text-children">
        <h1>
          Warung<span>Acil</span>
        </h1>
        <p>
          Acil membuka pesanan katering! amun pian
          <br /> handak memesan bisa klik “Pesan Sekarang” dibawah, pesannya
          maksimal h-3 acara lahh!
        </p>
        <button className="hero-button">PESAN SEKARANG!</button>
      </div>
    </div>
  );
};

export default Hero;
