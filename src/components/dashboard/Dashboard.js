import React, { useState } from "react";
import "./dashboard.css";
import DashboardCard from "./DashboardCard";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { db, storage } from "../../config/firebase-config";
import { ref, deleteObject } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import garis from "../../assets/images/garis.png";
import DashboardFooter from "./DashboardFooter";
import TambahMenuForm from "./tambahmenu/TambahMenuForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

const Dashboard = ({ handleLogOut, products }) => {
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  const handleEdit = (product) => {
    document.querySelector(".modal-container").style.display = "flex";
    setModal(true);
    const harga = product.harga.split("/").shift();
    setProduct({
      img: product.img,
      nama: product.nama,
      harga: harga,
      kategori: product.kategori,
      desc: product.desc,
      imgNama: product.imgNama,
      id: product.id,
    });
  };

  const handleRemoveDashboard = (newImgNama, setEditImgUrl) => {
    MySwal.fire({
      icon: "warning",
      title: "Hapus Foto",
      text: "Apakah Kamu yakin untuk menghapus?",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Hapus",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        const imgRef = ref(storage, `images/${newImgNama}`);
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
      } else {
        return;
      }
    });
  };

  const handleSubmit = async (
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
        MySwal.fire({
          icon: "success",
          title: "Berhasil diedit",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
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
    if (
      editImgUrl !== "" &&
      editNama !== "" &&
      editHarga !== "" &&
      editKategori !== "" &&
      editDesc !== "" &&
      newImgNama !== ""
    ) {
      document.querySelector(".modal-container").style.display = "none";
      MySwal.fire({
        icon: "warning",
        title: "Edit Product",
        text: "Apakah Kamu yakin untuk mengedit ini?",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Edit",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          handleSubmit(
            editImgUrl,
            editNama,
            editHarga,
            editKategori,
            editDesc,
            newImgNama,
            editId,
            e
          );
        } else return;
      });
    } else {
      document.querySelector(".validasi-form").removeAttribute("hidden");
    }
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
            setModal={setModal}
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
              <div
                className="dashboard-menu-wrapper"
                style={{
                  overflow: products.length ? "auto" : "visible",
                }}
              >
                {products.length ? (
                  <DashboardCard
                    products={products}
                    kategori="Best Seller"
                    handleEdit={handleEdit}
                  />
                ) : (
                  <div className="loader-wrapper">
                    <span className="loader"></span>
                  </div>
                )}
              </div>
            </div>
            <div className="dashboard-main-kategori">
              <div className="heading-main-kategori">
                <img src={garis} alt="garis" id="garis" />
                <h3>Biasa</h3>
              </div>
              <div
                className="dashboard-menu-wrapper"
                style={{
                  overflow: products.length ? "auto" : "visible",
                }}
              >
                {products.length ? (
                  <DashboardCard
                    products={products}
                    kategori="Biasa"
                    handleEdit={handleEdit}
                  />
                ) : (
                  <div className="loader-wrapper">
                    <span className="loader"></span>
                  </div>
                )}
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
