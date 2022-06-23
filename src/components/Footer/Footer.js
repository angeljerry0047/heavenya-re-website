import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        flex: 1,
        width: "100%",
        backgroundColor: "#2F4E89",
        boxShadow: "0px 3px 40px rgba(0, 0, 0, 0.101961)",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <h2
        style={{
          color: "white",
          display: "flex",
          width: "70%",
          marginLeft: "10px",
        }}
      >
        Heavenya
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "30%",
          color: "white",
        }}
      >
        <p style={{ color: "white" }}>About</p>
        <p style={{ color: "white" }}>Channels</p>
        <p style={{ color: "white" }}>More</p>
      </div>
    </div>
  );
}

export default Footer;
