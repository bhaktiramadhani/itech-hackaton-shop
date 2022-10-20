import React from "react";
import { useParams } from "react-router-dom";
import NavbarProduct from "../components/detail/NavbarProduct";
import "../components/detail/detail.css";
import CardDetail from "../components/detail/CardDetail";

const DetailPage = ({ products }) => {
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
                img={product.img}
                nama={product.nama}
                harga={product.harga}
                kategori={product.kategori}
                desc={product.desc}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DetailPage;
