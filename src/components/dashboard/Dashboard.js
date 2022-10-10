import React, { useEffect, useState } from "react";
import "./dashboard.css";
import DashboardCard from "./DashboardCard";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { db, storage } from "../../config/firebase-config";
import { ref, deleteObject } from "firebase/storage";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import garis from "../../assets/images/garis.png";
import DashboardFooter from "./DashboardFooter";
import TambahMenuForm from "./tambahmenu/TambahMenuForm";

const Dashboard = ({ handleLogOut }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const productsCollectionRef = collection(db, "products");
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  const handleEdit = (product) => {
    document.querySelector(".modal-container").style.display = "flex";
    setModal(true);
    setProduct({
      img: product.img,
      nama: product.nama,
      harga: product.harga,
      kategori: product.kategori,
      desc: product.desc,
      imgNama: product.imgNama,
      id: product.id,
    });
    console.log(product);
  };

  const handleRemoveDashboard = (editImgNama, setEditImgUrl) => {
    const checkDelete = window.confirm("apakah anda yakin untuk menghapus?");
    if (checkDelete) {
      const imgRef = ref(storage, `images/${editImgNama.name}`);
      deleteObject(imgRef)
        .then(() => alert("berhasil dihapus"))
        .catch((err) => console.log(err));

      const buttonFile = document.getElementById("button-file");
      buttonFile.style.display = "none";
      const textFile = document.getElementById("text-file");
      textFile.style.display = "block";
      const fotoProduk = document.querySelector(".foto-produk");
      fotoProduk.style.width = "100%";
      fotoProduk.style.height = "156px";
      setEditImgUrl("");
      const images = document.getElementById("img-file");
      images.setAttribute("hidden", "");
      document.getElementById("input-file-img").value = "";
      const inputanImg = document.getElementById("input-file-img");
      inputanImg.removeAttribute("hidden");
    } else return;
  };

  const handleSubmitDashboard = async (
    editImgUrl,
    editNama,
    editHarga,
    editKategori,
    editDesc,
    newImgNama,
    editId,
    e
  ) => {
    e.preventDefault();
    const ref = doc(db, "products", editId);
    await updateDoc(ref, {
      nama: editNama,
      desc: editDesc,
      img: editImgUrl,
      harga: `${editHarga}/Porsi`,
      imgNama: newImgNama,
      kategori: editKategori,
    })
      .then(() => {
        console.log("update berhasil");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="dashboard-container">
      <div
        className="modal-container"
        onClick={() => setModal(false)}
        style={modal ? { display: "flex" } : { display: "none" }}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <TambahMenuForm
            dashboard={true}
            product={product}
            handleRemoveDashboard={handleRemoveDashboard}
            handleSubmitDashboard={handleSubmitDashboard}
          />
        </div>
      </div>
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardNavbar handleLogOut={handleLogOut} />
        <div className="dashboard-main-wrapper">
          <h2>Dashboard</h2>
          <div className="dashboard-main-kategori-container">
            <div className="dashboard-main-kategori">
              <div className="heading-main-kategori">
                <img src={garis} alt="garis" id="garis" />
                <h3>Best Seller</h3>
              </div>
              <div className="dashboard-menu-wrapper">
                <DashboardCard
                  products={products}
                  kategori="Best Seller"
                  handleEdit={handleEdit}
                />
              </div>
            </div>
            <div className="dashboard-main-kategori">
              <div className="heading-main-kategori">
                <img src={garis} alt="garis" id="garis" />
                <h3>Biasa</h3>
              </div>
              <div className="dashboard-menu-wrapper">
                <DashboardCard
                  products={products}
                  kategori="Biasa"
                  handleEdit={handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
