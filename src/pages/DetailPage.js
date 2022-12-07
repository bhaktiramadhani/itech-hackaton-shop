import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarProduct from "../components/detail/NavbarProduct";
import "../components/detail/detail.css";
import CardDetail from "../components/detail/CardDetail";
import CartLogo from "../assets/images/Keranjang.svg";
import ModalCart from "../components/detail/ModalCart";

const DetailPage = ({ products, onAdd, cartItem, onRemove }) => {
  const { nama } = useParams();
  const [modal, setModal] = useState(false);

  const handleCart = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="detail-container">
        <div
          className="modal-container-cart"
          onClick={() => setModal(!modal)}
          style={{ display: modal ? "flex" : "none" }}
        >
          <div className="modal-cart" onClick={(e) => e.stopPropagation()}>
            <ModalCart
              cartItem={cartItem}
              onAdd={onAdd}
              onRemove={onRemove}
              setModal={setModal}
            />
          </div>
        </div>
        {products
          .filter(
            (product) =>
              product.nama.split(" ").join("-").toLowerCase() === nama
          )
          .map((product) => (
            <div key={product.id}>
              <div className="navbar-product-container">
                <NavbarProduct nama={product.nama} cartItem={cartItem} />
                <div className="navbar-cart-container">
                  <button type="button" onClick={handleCart}>
                    <img src={CartLogo} alt="cart logo" />
                    <p>{cartItem && cartItem.length}</p>
                  </button>
                </div>
              </div>
              <CardDetail
                key={product.id}
                onAdd={onAdd}
                product={product}
                cartItem={cartItem}
                onRemove={onRemove}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DetailPage;
