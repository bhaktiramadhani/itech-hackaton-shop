import React from "react";
import DashboardCardButton from "./DashboardCardButton";
import DashboardCardMore from "./DashboardCardMore";

const DashboardCard = ({ products, kategori, handleEdit }) => {
  return (
    <>
      {products
        .map((product) => {
          if (product.kategori !== kategori) {
            return products.filter(() => product.kategori === kategori);
          }
          return (
            <div
              className="dashboard-card"
              key={product.id}
              style={{ zIndex: 999 }}
            >
              <img
                src={product.img}
                alt={product.nama}
                className="dashboard-card-img"
                width="243"
                height="239"
              />
              <h4>{product.nama}</h4>
              <hr />
              <div className="dashboard-card-text">
                <p className="dashboard-harga">Harga: {product.harga}</p>
                <p className="dashboard-kategori">
                  Kategori: {product.kategori}
                </p>
                <p className="dashboard-desc">Deskripsi: {product.desc}</p>
              </div>
              <DashboardCardMore
                id={product.id}
                handleEdit={handleEdit}
                product={product}
                imgNama={product.imgNama}
              />
            </div>
          );
        })
        .reverse()}
    </>
  );
};

export default DashboardCard;
