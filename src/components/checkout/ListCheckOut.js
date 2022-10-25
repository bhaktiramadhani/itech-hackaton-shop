import React from "react";

const ListCheckOut = ({ item }) => {
  const { nama, qty, harga } = item;

  console.log();
  return (
    <div className="list-product">
      <div className="list-product-text">
        <p>{nama}</p>
        <p>
          {"Rp. " +
            Number(harga.split("/").shift().split(" ").pop() * qty) +
            ".000"}
        </p>
      </div>
      <div className="list-product-button">
        <button>-</button>
        <p>{qty}</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default ListCheckOut;
