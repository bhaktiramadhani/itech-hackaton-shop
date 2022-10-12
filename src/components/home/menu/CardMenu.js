import React from "react";

const CardMenu = ({ img, nama }) => {
  return (
    <div className="card-menu">
      <img src={img} alt={nama} />
      <h3>{nama}</h3>
      <button>Selengkapnya</button>
    </div>
  );
};

export default CardMenu;
