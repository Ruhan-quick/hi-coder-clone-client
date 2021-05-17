import React from "react";
import { Button } from "react-bootstrap";
import "./TBody.css";
const TBody = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/about/h8-left-img.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="tbody-text">
              <h6 style={{ color: "gray" }}>HICODER</h6>
              <h1 className="tbh1">
                We help students learn Full Stack Development.
              </h1>
              <p style={{ textAlign: "justify" }}>
                HiCoder does everything that helps students become successful in
                the software industry. From product thinking to product
                designing, system designing, choosing the right frameworks,
                breaking projects in stages to building teams, and working
                collaboratively to making the application comply with the latest
                Google SEO needs and knowledge about integrated analytics, we do
                everything in between.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 ">
            <div className="tbody-text">
              <h6 style={{ color: "gray" }}>HICODER</h6>
              <h1 className="tbh1">
                We help students learn Full Stack Development.
              </h1>
              <p style={{ textAlign: "justify" }}>
                HiCoder does everything that helps students become successful in
                the software industry. From product thinking to product
                designing, system designing, choosing the right frameworks,
                breaking projects in stages to building teams, and working
                collaboratively to making the application comply with the latest
                Google SEO needs and knowledge about integrated analytics, we do
                everything in between.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/home/2.jpg"
              alt=""
            />
          </div>
        </div>
        <Button
          className="button-style pt-3 pb-3 px-5 mt-5"
          variant="outline-primary"
        >
          KNOW MORE
        </Button>
      </div>
      <div class="custom-shape-divider-bottom-1621146778">
        {/* <h1
          style={{
            position: "fixed",
            color: "red",
            zIndex: "3",
          }}
          className="in-item"
        >
          {" "}
          Hello check
        </h1> */}

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TBody;
