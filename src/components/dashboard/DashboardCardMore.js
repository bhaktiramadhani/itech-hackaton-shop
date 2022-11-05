import React from "react";
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
    console.log(imgNama);
    const imgRef = ref(storage, `images/${imgNama}`);
    deleteObject(imgRef)
      .then(() => alert("berhasil dihapus"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="button-card-wrapper" id={id}>
      <button className="button-card-edit" onClick={() => handleEdit(product)}>
        Edit
      </button>
      <button className="button-card-delete" onClick={() => handleDelete(id)}>
        Hapus
      </button>
    </div>
  );
};

export default DashboardCardMore;
