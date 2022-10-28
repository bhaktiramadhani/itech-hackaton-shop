import React from "react";
import Hero from "../components/home/hero/Hero";
import Navigation from "../components/home/navigation/Navigation";
import TopProduk from "../components/home/top-produk/TopProduk";
import Menu from "../components/home/menu/Menu";
import Footer from "../components/home/footer/Footer";
import "./styles.css";

const HomePage = ({ products }) => {
  const handleArrow = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container">
        <button className="arrow-button" onClick={handleArrow}></button>
        <div className="hero-wrapper">
          <Navigation />
          <Hero />
          <TopProduk products={products} />
          <Menu products={products} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
