import React from "react";
import { useNavigate } from "react-router-dom";

const CardMenu = ({ img, nama, id }) => {
  const navigate = useNavigate();
  const handleMore = (nama) => {
    navigate(`/product/${nama.split(" ").join("-").toLowerCase()}`);
  };
  console.log();
  return (
    <div className="card-menu">
      <img src={img} alt={nama} />
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
