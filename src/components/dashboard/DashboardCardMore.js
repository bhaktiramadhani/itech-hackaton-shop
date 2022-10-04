import React from "react";
import editButtonLogo from "../../assets/images/edit.svg";
import deleteButtonLogo from "../../assets/images/delete.svg";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const DashboardCardMore = ({ id }) => {
  const handleDelete = async (id) => {
    const checkDelete = window.confirm(
      "apakah anda yakin untuk menghapus ini?"
    );
    if (checkDelete) {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc).then(() => {
        alert("berhasil dihapus");
        window.location.reload();
      });
    } else return;
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
      <div className="button-card-edit">
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
