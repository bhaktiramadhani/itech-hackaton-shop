import React from "react";
import { useNavigate } from "react-router-dom";

const CardMenu = ({ img, nama }) => {
  const navigate = useNavigate();
  const handleMore = (nama) => {
    navigate(`/product/${nama.split(" ").join("-").toLowerCase()}`);
  };
  return (
    <div className="card-menu">
      <img src={img} alt={nama} width="307" height="248" />
      <h3>{nama}</h3>
      <button
        onClick={() => {
          handleMore(nama);
          window.scrollTo(0, 0);
        }}
      >
        Selengkapnya
      </button>
    </div>
  );
};

export default CardMenu;
