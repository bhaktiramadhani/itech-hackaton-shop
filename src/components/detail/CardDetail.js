import React, { useState } from "react";

const CardDetail = ({ img, nama, harga, kategori, desc }) => {
  const [cart, setCart] = useState([]);
  const handleTambah = (nama, harga, e) => {
    e.target.setAttribute("disabled", true);
    setCart({ nama: nama, harga: harga, count: 1 });
    const buttonBeli = document.querySelector(".card-detail-button-beli");
    const buttonIncrement = document.querySelector(".button-increment-produk");
    buttonBeli.style.display = "block";
    buttonIncrement.style.display = "flex";
  };
  return (
    <div className="card-detail-container">
      <div className="card-detail-content">
        <img src={img} alt={nama} />
        <div className="detail-text">
          <p className="detail-text-menu">Menu: {nama}</p>
          <hr />
          <p className="detail-text-harga">Harga: {harga}</p>
          <hr />
          <p className="detail-text-kategori">Kategori: {kategori}</p>
          <hr />
          <p className="detail-text-desc">Deskripsi: {desc}</p>
          <hr />
          <p className="detail-text-note">
            P.S: Pemesanan dilakukan minimal sebelum H-3 acara.
          </p>
        </div>
      </div>
      <div className="card-detail-button">
        <button
          className="card-detail-button-tambah"
          onClick={(e) => handleTambah(nama, harga, e)}
        >
          Tambahkan ke keranjang
        </button>
        <button className="card-detail-button-beli" style={{ display: "none" }}>
          Beli Sekarang
        </button>
        <div className="button-increment-produk" style={{ display: "none" }}>
          <button>-</button>
          <p>{cart.count}</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
