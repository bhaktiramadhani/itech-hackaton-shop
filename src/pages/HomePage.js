import React from "react";
import Hero from "../components/home/hero/Hero";
import Navigation from "../components/home/navigation/Navigation";
import TopProduk from "../components/home/top-produk/TopProduk";
import Menu from "../components/home/menu/Menu";
import Footer from "../components/home/footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="hero-wrapper">
          <Navigation />
          <Hero />
          <TopProduk />
          <Menu />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
