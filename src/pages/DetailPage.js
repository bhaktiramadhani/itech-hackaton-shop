import React from "react";
import { useParams } from "react-router-dom";
import NavbarProduct from "../components/detail/NavbarProduct";
import "../components/detail/detail.css";
import CardDetail from "../components/detail/CardDetail";

const DetailPage = ({ products, onAdd, cartItem, onRemove }) => {
  const { nama } = useParams();
  return (
    <>
      <div className="detail-container">
        {products
          .filter(
            (product) =>
              product.nama.split(" ").join("-").toLowerCase() === nama
          )
          .map((product) => (
            <div key={product.id}>
              <NavbarProduct nama={product.nama} />
              <CardDetail
                key={product.id}
                onAdd={onAdd}
                product={product}
                cartItem={cartItem}
                onRemove={onRemove}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DetailPage;
