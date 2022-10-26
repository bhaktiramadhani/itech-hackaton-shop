import React from "react";

const ListCheckOut = ({ item, formatRupiah, onAdd, onRemove }) => {
  const { nama, qty, harga } = item;

  return (
    <div className="list-product">
      <div className="list-product-text">
        <p>{nama}</p>
        <p>
          {formatRupiah(
            String(harga.split("/").shift().split(" ").pop() * qty + "000"),
            "Rp. "
          )}
        </p>
      </div>
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
        <p>{qty}</p>
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
  );
};

export default ListCheckOut;
