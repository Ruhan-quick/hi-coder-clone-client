import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-style">
      <div className="container">
        <div className="row ">
          <div className="col-lg-7 col-md-10 col-sm-12 d-flex align-items-center header-text">
            <div>
              <h5>YOUR TIME, OUR EFFORTS</h5>
              <h1 className="ht">
                Learn Production Grade Full Stack Development
              </h1>
              <Button
                className="button-style pt-3 pb-3 px-5 mt-5"
                variant="outline-primary"
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom ">
        <h2 className="container">NEXT BATCH: 27 May |</h2>
      </div>
    </div>
  );
};

export default Header;
