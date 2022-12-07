import React from "react";
import { useNavigate } from "react-router-dom";

const ModalCart = ({ cartItem, onAdd, onRemove, setModal }) => {
  const navigate = useNavigate();
  return (
    <div className="modal-cart-content">
      <button className="close-modal" onClick={() => setModal(false)}>
        X
      </button>
      <h2>Pesanan Anda</h2>
      <div className="cart-product-item-wrapper">
        {cartItem.length === 0 && (
          <p className="empty-product">Masih Kosong!</p>
        )}
        {cartItem.map((item) => (
          <div className="cart-product-item">
            <img src={item.img} alt={item.nama} width={120} />
            <div className="cart-product-text">
              <h3>{item.nama}</h3>
              <p>Jumlah pesanan: {item.qty}</p>
              <div className="list-product-button">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onRemove(item);
                  }}
                >
                  -
                </button>
                <p id="text-product-qty">{item.qty}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onAdd(item);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          className="cart-button-checkout"
          onClick={() => {
            navigate("/checkout");
            window.scrollTo(0, 0);
          }}
          style={{ display: cartItem.length === 0 ? "none" : "block" }}
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
