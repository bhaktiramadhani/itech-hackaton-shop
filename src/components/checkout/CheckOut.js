import React from "react";
import NavbarProduct from "../detail/NavbarProduct";
import CardCheckOut from "./CardCheckOut";
import "./checkout.css";

const CheckOut = ({ cartItem }) => {
  return (
    <div className="checkout-container">
      <NavbarProduct nama="Data Pembelian" />
      <CardCheckOut cartItem={cartItem} />
    </div>
  );
};

export default CheckOut;
