import React from "react";
import "./WCard.css";
const WCard = ({ cImage, cTitle, cDetails }) => {
  return (
    <div className="wcard" style={{ textAlign: "center" }}>
      <img src={cImage} alt="" />
      <h5>{cTitle}</h5>
      <p>{cDetails}</p>
    </div>
  );
};

export default WCard;
