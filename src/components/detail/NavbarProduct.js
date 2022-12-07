import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/Arrow.png";
import "./detail.css";

const NavbarProduct = ({ nama }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="navbar-product-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={arrow} alt="arrow" />
      </button>
      <hr />
      <h3>{nama}</h3>
    </>
  );
};

export default NavbarProduct;
