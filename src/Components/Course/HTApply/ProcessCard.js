import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const ProcessCard = ({ pImage, pTitle, pDescription, points }) => {
  return (
    <div>
      <div
        className="row mt-5 mb-5 d-flex align-items-center"
        style={{ marginTop: "100px" }}
      >
        <div className="col-lg-6 col-md-12">
          <img src={pImage} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="cmh">{pTitle}</h1>
          <p>{pDescription}</p>
          {points.map((p) => (
            <h6 className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} color="blue" />
              &nbsp;&nbsp; {p}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
