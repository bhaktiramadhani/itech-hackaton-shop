import React from "react";
import "./Hero.css";
import LogoHero from "../../../assets/images/logo-hero.png";

const Hero = () => {
  return (
    <div className="hero-text-container" id="beranda">
      <div className="hero-text-children">
        <img src={LogoHero} alt="logo warung acil" width="390" height="134" />
        <p>
          Acil membuka pesanan katering! amun pian
          <br /> handak memesan bisa klik “Pesan Sekarang” dibawah, pesannya
          maksimal h-3 acara lahh!
        </p>
        <a href="#menu" className="hero-button">
          PESAN SEKARANG!
        </a>
      </div>
    </div>
  );
};

export default Hero;
