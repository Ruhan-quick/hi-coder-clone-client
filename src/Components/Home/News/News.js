import React from "react";
import NewsSlider from "./NewsSlider/NewsSlider";

const News = () => {
  return (
    <div style={{ textAlign: "center" }} className="container mt-5">
      <h6>NEWS</h6>
      <h1 style={{ fontWeight: "800" }}>
        #COVID19 Demands more full stack developers.
      </h1>
      <h1 style={{ fontWeight: "800", color: "#1C3988" }}>
        & Industry Updates
      </h1>
      <NewsSlider></NewsSlider>
    </div>
  );
};

export default News;
