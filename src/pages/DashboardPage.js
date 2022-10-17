import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { MySwal } from "../components/dashboard/Dashboard";

const DashboardPage = ({ products }) => {
  const logOut = async () => {
    await signOut(auth);
    MySwal.fire({
      icon: "success",
      title: "Berhasil keluar",
    });
  };
  const handleLogOut = () => {
    MySwal.fire({
      icon: "warning",
      title: "Keluar",
      text: "Apakah Kamu yakin untuk keluar?",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Keluar",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          logOut();
        }, 1000);
      } else {
        return;
      }
    });
  };

  return (
    <>
      <Dashboard handleLogOut={handleLogOut} products={products} />
    </>
  );
};

export default DashboardPage;
