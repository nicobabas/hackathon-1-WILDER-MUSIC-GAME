import React from "react";
// import { containerStyle } from "./Progress.css";
// import { contentStyle } from "./Progress.css";

const containerStyle = {
  border: "1px solid silver",
  background: "#ededed",
};

const contentStyle = {
  background: "#00ccb8",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  fontFamily: "Roboto",
  transition: "0.4s",
};

const ProgressBar = ({ progress }) => {
  const state = `${progress}%`;
  return (
    <div style={containerStyle}>
      <div style={{ ...contentStyle, width: state }}>{progress > 5 ? state : ""}</div>
    </div>
  );
};

export default ProgressBar;
