import React from "react";

const Partners = () => {
  return (
    <div
      className="mt-5"
      style={{ textAlign: "center", backgroundColor: "#1C3988" }}
    >
      <div className="container">
        <h1 className="pt-5" style={{ fontWeight: "800", color: "white" }}>
          Partner & Associates
        </h1>
        <div className="row py-5">
          <div className="col-lg-3">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/partner/2.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/partner/3.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/partner/4.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/partner/5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
