import React from "react";

const CardTopProduk = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        if (product.kategori !== "Best Seller") {
          return products.filter(() => product.kategori === "Best Seller");
        }
        return (
          <div className="card-produk" key={product.id}>
            <img src={product.img} alt={product.nama} className="img-produk" />
            <h3>{product.nama}</h3>
            <hr />
            <div className="desc-container">
              <p className="desc-kategori">
                Kategori : <span>{product.kategori}</span>
              </p>
              <p className="desc-deskripsi">
                Deskripsi: <span>{product.desc}</span>
              </p>
            </div>
            <hr />
            <p className="price-produk">{product.harga}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardTopProduk;
