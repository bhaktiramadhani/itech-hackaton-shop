import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/Arrow.png";

const NavbarProduct = ({ nama }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-product-container">
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
    </div>
  );
};

export default NavbarProduct;
