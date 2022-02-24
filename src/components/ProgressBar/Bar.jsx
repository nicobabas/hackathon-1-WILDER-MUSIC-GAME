import React from "react";
import ProgressBar from "./ProgressBar.jsx";
import "./ProgressBar.css";

const Bar = () => {
  return (
    <>
      <ProgressBar />
      <div className="progressBarChange" style={{ width: "10" }}></div>
      <div className="pourcentage">
        <div className="Header">Question :1/10</div>
        <div className="Header">Progression :10%</div>
      </div>
    </>
  );
};

export default Bar;
