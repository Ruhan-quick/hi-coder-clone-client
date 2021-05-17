import React from "react";
import WCard from "./WCard/WCard";
import "./WLearn.css";
const Wlearn = () => {
  const cardData = [
    {
      cImage: "https://hicoder.in/assets/images/services/style9/1.png",
      cTitle: "Front End",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/2.png",
      cTitle: "Backend",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/3.png",
      cTitle: "Project Management",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/3.png",
      cTitle: "Project Management",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
  ];
  const cardData2 = [
    {
      cImage: "https://hicoder.in/assets/images/services/style9/3.png",
      cTitle: "Front End",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/6.png",
      cTitle: "Backend",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/7.png",
      cTitle: "Project Management",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      cImage: "https://hicoder.in/assets/images/services/style9/3.png",
      cTitle: "Project Management",
      cDetails:
        "Students learn to design, develope the UI following UX with industry standards.",
    },
  ];
  return (
    <div className="container">
      <div className="center-head py-4">
        <h6>WHAT YOU LEARN</h6>
        <h1 style={{ fontWeight: "800" }}>at HiCoder is useful</h1>
        <h1 style={{ fontWeight: "800", color: "#20429D" }}>
          Technology, Management & more
        </h1>
      </div>
      <div className="row">
        {cardData.map((cd) => (
          <div className="col-lg-3 col-md-12">
            <WCard
              cImage={cd.cImage}
              cTitle={cd.cTitle}
              cDetails={cd.cDetails}
            ></WCard>
          </div>
        ))}
      </div>
      <div className="row pt-4">
        {cardData2.map((cd) => (
          <div className="col-lg-3 col-md-12">
            <WCard
              cImage={cd.cImage}
              cTitle={cd.cTitle}
              cDetails={cd.cDetails}
            ></WCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wlearn;
