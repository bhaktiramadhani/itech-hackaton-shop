import React from "react";
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import TopProduk from "../components/top-produk/TopProduk";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  // const [scroll, setScroll] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScroll(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className="container" style={{ height: "2000px" }}>
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
