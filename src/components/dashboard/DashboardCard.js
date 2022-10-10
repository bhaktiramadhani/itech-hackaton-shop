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
              <DashboardCardMore
                id={product.id}
                handleEdit={handleEdit}
                product={product}
                imgName={product.imgNama}
              />
              <img
                src={product.img}
                alt={product.nama}
                className="dashboard-card-img"
              />
              <h4>{product.nama}</h4>
              <hr />
              <p className="dashboard-harga">Harga: {product.harga}</p>
              <p className="dashboard-kategori">Kategori: {product.kategori}</p>
              <p className="dashboard-desc">Deskripsi: {product.desc}</p>
              <hr />
              <DashboardCardButton id={product.id} idButton={product.id} />
            </div>
          );
        })
        .reverse()}
    </>
  );
};

export default DashboardCard;
