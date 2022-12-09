import React from "react";
import TambahMenu from "../components/dashboard/tambahmenu/TambahMenu";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

const TambahMenuPage = ({ user }) => {
  const handleLogOut = async () => {
    const check = window.confirm("apakah anda yakin untuk keluar?");
    if (check) {
      await signOut(auth);
      alert("Berhasil keluar");
    } else {
      return;
    }
  };
  return (
    <>
      <TambahMenu handleLogOut={handleLogOut} user={user} />
    </>
  );
};

export default TambahMenuPage;
