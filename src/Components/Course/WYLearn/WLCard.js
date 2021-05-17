import React from "react";

const WLCard = ({ scount, stitle, sdetails }) => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        padding: "20px",
        marginTop: "20px",
        minHeight: "290px",
      }}
    >
      <h1 style={{ color: "#106EEA" }}>{scount}</h1>
      <h2 style={{ color: "white" }}>{stitle}</h2>
      <p style={{ color: "white" }}>{sdetails}</p>
    </div>
  );
};

export default WLCard;
