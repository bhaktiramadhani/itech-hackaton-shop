import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";

const DashboardPage = () => {
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
      <Dashboard handleLogOut={handleLogOut} />
    </>
  );
};

export default DashboardPage;
