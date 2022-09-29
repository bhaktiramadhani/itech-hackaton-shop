import React from "react";
import DashboardCardButton from "./DashboardCardButton";
import DashboardCardMore from "./DashboardCardMore";

const DashboardCard = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        // console.log(product);
        return (
          <div className="dashboard-card" key={product.id}>
            <DashboardCardMore id={product.id} />
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
      })}
    </>
  );
};

export default DashboardCard;
