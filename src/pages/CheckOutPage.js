import React from "react";
import CheckOut from "../components/checkout/CheckOut";

const CheckOutPage = ({ cartItem, onAdd, onRemove }) => {
  console.log(cartItem);
  return <CheckOut cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />;
};

export default CheckOutPage;
