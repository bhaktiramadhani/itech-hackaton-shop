import React from "react";
import { useNavigate } from "react-router-dom";

const CardDetail = ({ onAdd, product, cartItem, onRemove }) => {
  const navigate = useNavigate();
  const { img, nama, harga, kategori, desc } = product;
  const handleTambahKeranjang = (e) => {
    onAdd(product);
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
          onClick={handleTambahKeranjang}
        >
          Tambahkan ke keranjang
        </button>
        <button
          onClick={() => {
            navigate("/checkout");
            window.scrollTo(0, 0);
          }}
          className="card-detail-button-beli"
          style={{
            display: cartItem
              .filter((item) => item.id === product.id)
              .map((item) => (item ? "block" : "none")),
          }}
        >
          Beli Sekarang
        </button>
        <div
          className="button-increment-produk"
          style={{
            display: cartItem
              .filter((item) => item.id === product.id)
              .map((item) => (item ? "flex" : "none")),
          }}
        >
          <button onClick={() => onRemove(product)}>-</button>
          <p>
            {cartItem
              .filter((item) => item.id === product.id)
              .map((item) => item.qty)}
          </p>
          <button onClick={() => onAdd(product)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
