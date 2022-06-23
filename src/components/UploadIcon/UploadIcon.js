import React from "react";
import { FiUpload } from "react-icons/fi";

function UploadIcon({ styles, iconSize }) {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "white",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      <FiUpload size={iconSize ? iconSize : 30} color={"#91B5FB"} />
    </div>
  );
}

export default UploadIcon;
