import React from "react";
import checkIcon from "../../assets/images/check.png";

const DashboardCard = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        // console.log(product);
        return (
          <div className="dashboard-card" key={product.nama}>
            <img src={product.img} alt={product.nama} />
            <h4>{product.nama}</h4>
            {product.desc.map((data) => {
              return (
                <p key={data}>
                  <img
                    src={checkIcon}
                    alt={data}
                    className="dashboard-product-icon"
                  />
                  {data}
                </p>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default DashboardCard;
