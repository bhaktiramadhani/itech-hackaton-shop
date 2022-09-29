import React from "react";
import titikTiga from "../../assets/images/titiktiga.svg";

const DashboardCardButton = ({ id }) => {
  return (
    <div className="dashboard-card-button">
      <img
        src={titikTiga}
        alt="titiktiga"
        onClick={() => {
          document.getElementById(id).style.display = "block";
        }}
      />
    </div>
  );
};

export default DashboardCardButton;
