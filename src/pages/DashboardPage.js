import React from "react";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";

const DashboardPage = () => {
  const handleLogOut = async () => {
    await signOut(auth);
    alert("berhasil logout");
  };
  return (
    <>
      <div>DashboardPage</div>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
};

export default DashboardPage;
