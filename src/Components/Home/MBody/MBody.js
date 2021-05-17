import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const MBody = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-6 col-md-12">
          <h1 className="tbh1">Why HiCoder?</h1>
          <p>
            HiCoder enables students to think about real-world problems, design,
            and develop the right solution. know more
          </p>
          <div className="row py-3">
            <div className="col-3">
              <img
                src="https://hicoder.in/assets/images/whychooseus/style4/icons/1.png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-9">
              <h2 style={{ fontWeight: 700 }}>Personalized Training</h2>
              <p style={{ textAlign: "justify" }}>
                We understand the weakness of students coming from poor
                educational backgrounds. HiCoder avails resources and extra
                after-class support to match the criteria and keep up with tech.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-3">
              <img
                src="https://hicoder.in/assets/images/whychooseus/style4/icons/2.png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-9">
              <h2 style={{ fontWeight: 700 }}>Personalized Training</h2>
              <p style={{ textAlign: "justify" }}>
                We understand the weakness of students coming from poor
                educational backgrounds. HiCoder avails resources and extra
                after-class support to match the criteria and keep up with tech.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            style={{ width: "100%" }}
            src="https://hicoder.in/assets/images/whychooseus/style4/right-img.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="row py-5">
        <div className="col-lg-6 col-md-12">
          <img
            src="https://hicoder.in/assets/images/home/1.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-12 pt-5">
          <h1 className="tbh1">How does HiCoder help?</h1>
          <h6 style={{ textAlign: "justify" }} className="py-3">
            HiCoder resembeles software development and marketing altogether to
            develop applications that can be used by real user than keeping on
            Github.
          </h6>
          <p style={{ textAlign: "justify" }} className="pt-3">
            HiCoder understands the struggle, peer pressure an engineering
            student goes into throughout curriculum. We believe, Most
            engineering students who can be part of the core software industry
            end up having a tech support or customer care job just because
            college never taught trending technology, project Management or
            encouraged students to their own projects.
          </p>
          <Button
            variant="primary"
            style={{ fontWeight: "700" }}
            className="py-3 px-5 mt-3"
          >
            KNOW MORE
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default MBody;
