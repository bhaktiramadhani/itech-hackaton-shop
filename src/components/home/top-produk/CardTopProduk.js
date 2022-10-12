import React from "react";
import check from "../../../assets/images/check.png";

const CardTopProduk = ({ img, nama, desc, price }) => {
  return (
    <div className="card-produk">
      <img src={img} alt={nama} className="img-produk" />
      <h3>{nama}</h3>
      <div className="desc-container">
        <div className="desc-content">
          <img src={check} alt="check" />
          <p>Ayam goreng lengkuas</p>
        </div>
        <div className="desc-content">
          <img src={check} alt="check" />
          <p>Ayam goreng lengkuas</p>
        </div>
        <div className="desc-content">
          <img src={check} alt="check" />
          <p>Ayam goreng lengkuas</p>
        </div>
        <div className="desc-content">
          <img src={check} alt="check" />
          <p>Ayam goreng lengkuas</p>
        </div>
      </div>
      <hr />
      <p className="price-produk">{price}</p>
    </div>
  );
};

export default CardTopProduk;
