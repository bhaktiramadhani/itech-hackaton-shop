import React from "react";

const ButtonLogout = ({ handleLogOut }) => {
  return (
    <button className="button-logout" onClick={handleLogOut}>
      Keluar
    </button>
  );
};

export default ButtonLogout;
