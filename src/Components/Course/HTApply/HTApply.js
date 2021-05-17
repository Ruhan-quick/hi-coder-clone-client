import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Navs/NavBar";
import TopNav from "../../Navs/TopNav";
import ProcessCard from "./ProcessCard";

const HTApply = () => {
  const process = [
    {
      pImage: "https://hicoder.in/assets/images/apply/apply-2c.jpg",
      pTitle: "Application Process",
      pDescription:
        "Applying for the HiCoder full stack web developer is a 5 stage process. HiCoder does this to select the students that are hardworking and ready for the skill development and matches the following criteria. Student selection will be done on First Come First Serve Basis.",
      points: [
        "Check Eligibility",
        "Write STQ Test",
        "Attend Demo Class",
        "Pay Registration Fee & Sign ISA",
        "Start with Classes",
      ],
    },
    {
      pImage: "https://hicoder.in/assets/images/home/2.jpg",
      pTitle: "1. Check Eligibility",
      pDescription:
        "You must match the following to be eligible to apply for HiCoder full stack web developer programme programme.",
      points: [
        "A computer (4GB RAM or more), Mic",
        "Internet Connection (5Mbps or more)",
        "5+ hours per day",
      ],
    },
    {
      pImage: "https://hicoder.in/assets/images/apply/test.jpg",
      pTitle: "2. Write STQ Test",
      pDescription:
        "After few basic computer science and programming classes HICoder team will conduct a STQ Test(Student Technical Qualification) that defines student's capability, grasping power and ability to cope up with future classes.",
      points: [
        "Questions from Previous Classes & Resources",
        "Fixed timeline to complete",
        "Passing candidates will go to final round",
      ],
    },
    {
      pImage: "https://hicoder.in/assets/images/apply/demo-3.jpg",
      pTitle: "3. Attend Demo Class",
      pDescription:
        "Once application is approved, you will get a call(s) from HiCoder for further process and demo class.",
      points: [
        "Attend Scheduled Classes & TA Seasons",
        "Do Assignment & Coding Challenges",
        "Practice concepts you learn",
        "Attempt STQ Test based on past Classes",
      ],
    },
    {
      pImage: "https://hicoder.in/assets/images/apply/demo-3.jpg",
      pTitle: "3. Attend Demo Class",
      pDescription:
        "Once application is approved, you will get a call(s) from HiCoder for further process and demo class.",
      points: [
        "Attend Scheduled Classes & TA Seasons",
        "Do Assignment & Coding Challenges",
        "Practice concepts you learn",
        "Attempt STQ Test based on past Classes",
      ],
    },
    {
      pImage: "https://hicoder.in/assets/images/apply/demo-3.jpg",
      pTitle: "3. Attend Demo Class",
      pDescription:
        "Once application is approved, you will get a call(s) from HiCoder for further process and demo class.",
      points: [
        "Attend Scheduled Classes & TA Seasons",
        "Do Assignment & Coding Challenges",
        "Practice concepts you learn",
        "Attempt STQ Test based on past Classes",
      ],
    },
  ];
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "40vh", backgroundColor: "#1C3987" }}
      >
        <h1 style={{ fontWeight: "800", color: "white", fontSize: "60px" }}>
          How to apply?
        </h1>
      </div>
      <div className="container">
        {process.map((ps) => (
          <div style={{ paddingTop: "40px" }}>
            <ProcessCard
              pImage={ps.pImage}
              pTitle={ps.pTitle}
              pDescription={ps.pDescription}
              points={ps.points}
            ></ProcessCard>
          </div>
        ))}
        <div
          className="button"
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Button
            variant="primary"
            style={{
              fontWeight: "700",
              backgroundColor: "blue",
            }}
            className="py-3 px-5 mt-3"
          >
            START MY APPLICATION
          </Button>{" "}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HTApply;
