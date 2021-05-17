import React from "react";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const Reviews = () => {
  return (
    <div className="container">
      <div className="container pt-4" style={{ textAlign: "center" }}>
        <h6>THOUGHTS ON HICODER SYLLABUS</h6>
        <h1 style={{ fontWeight: "700" }}>Reviews by Industry Experts</h1>
      </div>
      <div className="row pt-5">
        <div className="col-6">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/30NvqKm/screenshot-hicoder-in-2021-05-16-14-51-33.png"
            alt=""
          />
        </div>
        <div className="col-6">
          <ReviewSlider></ReviewSlider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
