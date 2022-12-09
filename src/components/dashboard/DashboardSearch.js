import React from "react";

const DashboardSearch = ({ products, setSerchProducts, setSearchTitle }) => {
  const handleSearch = (e) => {
    let search = products.filter((product) =>
      product.nama.toLowerCase().includes(e.toLowerCase())
    );
    setSearchTitle(e);
    setSerchProducts(search);
  };
  return (
    <div className="dashboard-search-wrapper">
      <h3>Pencarian Produk</h3>
      <input
        placeholder="cari product...."
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default DashboardSearch;
