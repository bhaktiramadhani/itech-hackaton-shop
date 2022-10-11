import React from "react";
import editButtonLogo from "../../assets/images/edit.svg";
import deleteButtonLogo from "../../assets/images/delete.svg";
import { doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../config/firebase-config";
import { MySwal } from "./Dashboard";

const DashboardCardMore = ({ id, handleEdit, product, imgNama }) => {
  const handleDelete = async (id) => {
    MySwal.fire({
      icon: "warning",
      title: "Hapus Product",
      text: "Apakah Kamu yakin untuk menghapus ini?",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Hapus",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleted(id);
      } else return;
    });
  };

  const deleted = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc).then(() => {
      window.location.reload();
      MySwal.fire({
        icon: "success",
        title: "Berhasil dihapus",
      });
    });
    // delete img tidak berfungsi
    const imgRef = ref(storage, `images/${imgNama}`);
    deleteObject(imgRef)
      .then(() => alert("berhasil dihapus"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="button-card-wrapper" id={id}>
      <button
        onClick={() => {
          document.getElementById(id).style.display = "none";
        }}
        className="button-close-card"
      >
        x
      </button>
      <div
        className="button-card-edit"
        onClick={() => {
          handleEdit(product);
        }}
      >
        <p className="button-edit-text">Edit</p>
        <img src={editButtonLogo} alt="edit" width={10} height={10} />
      </div>
      <div className="button-card-delete" onClick={() => handleDelete(id)}>
        <p className="button-delete-text">Delete</p>
        <img src={deleteButtonLogo} alt="delete" width={11} height={11} />
      </div>
    </div>
  );
};

export default DashboardCardMore;
