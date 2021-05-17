import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-style py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://hicoder.in/assets/images/logo.png"
              style={{ width: "40%" }}
              alt=""
            />
            <p
              style={{
                textAlign: "justify",
                paddingTop: "30px",
                paddingRight: "150px",
              }}
            >
              HiCoder enables students in being capable to develop production
              grade application by availing full stack development, Soft skills,
              Analytics and project management skills to get a core software job
              in the Industry.
            </p>
            <Button
              variant="primary"
              style={{ fontWeight: "700" }}
              className="py-3 px-4 mt-2"
            >
              APPLY NOW
            </Button>{" "}
          </div>
          <div className="col-lg-2 col-md-12">
            <h3>Info</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h3>Contact</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
                India, PIN: 500033
              </li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </div>
        <hr className="mt-5" style={{ fontWeight: "800", color: "black" }} />
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h6>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</h6>
            <p>
              Privacy Policy | Terms of Service | * Registration Charges Applied
            </p>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-end">
            <span>
              <FontAwesomeIcon
                className="mx-2"
                icon={faFacebookSquare}
                size="2x"
                color="blue"
              />
              <FontAwesomeIcon
                className="mx-2"
                icon={faFacebookSquare}
                size="2x"
                color="blue"
              />
              <FontAwesomeIcon
                className="mx-2"
                icon={faFacebookSquare}
                size="2x"
                color="blue"
              />
              <FontAwesomeIcon
                className="mx-2"
                icon={faFacebookSquare}
                size="2x"
                color="blue"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
