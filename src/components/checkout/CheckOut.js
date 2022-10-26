import React from "react";
import NavbarProduct from "../detail/NavbarProduct";
import CardCheckOut from "./CardCheckOut";
import "./checkout.css";

const CheckOut = ({ cartItem, onAdd, onRemove }) => {
  return (
    <div className="checkout-container">
      <NavbarProduct nama="Data Pembelian" />
      <CardCheckOut cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
};

export default CheckOut;
