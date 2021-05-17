import React from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../Navs/NavBar";
import TopNav from "../../Navs/TopNav";
import WLCard from "./WLCard";
import "./WYLearn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Reviews from "../../Home/Reviews/Reviews";
import Footer from "../../Home/Footer/Footer";
const WYLearn = () => {
  const syllabus = [
    {
      scount: "01.",
      stitle: "Basic Computer Science",
      sdetails:
        "WHW(What, How, Where) Computer, Hardware, and Software, Programming Language, OS, Application, Networking, Security, Server, Cloud and, etc.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
    {
      scount: "02.",
      stitle: "Frontend Design",
      sdetails:
        "You will learn to design UI, application layouts, simple front end games using front end technologies and deploy them on production servers.",
    },
  ];
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <div className="container">
        <div className="row my-5">
          <div
            className="col-lg-5 col-md-12 my-5"
            style={{ paddingTop: "100px" }}
          >
            <h6>SYLLABUS</h6>
            <h1 style={{ fontWeight: "800" }}>
              What will you learn at HiCoder?
            </h1>
            <p>
              HiCoder’s production grade full stack development course
              curriculum is research and assembled by developer’s and product
              manager’s that make decisions in product-based companies. Skilled
              Candidates with Production Experience are hot picks and hot swaps
              for startups and product based companies.
            </p>
            <Button
              variant="primary"
              style={{ fontWeight: "700" }}
              className="py-3 px-5 mt-3"
            >
              KNOW MORE
            </Button>{" "}
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div
                  className="item"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F1F6FC",
                    borderRadius: "20px",
                    padding: "30px",
                  }}
                >
                  <img
                    style={{ width: "30%" }}
                    src="https://hicoder.in/assets/images/services/icons/modify/2.png"
                    alt=""
                  />
                  <h5>Design & Development</h5>
                  <p>
                    Students will learn to design mobile, desktop responsive web
                    components, layouts for products considering end users.
                  </p>
                </div>
                <div
                  className="item mt-3"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F1F6FC",
                    borderRadius: "20px",
                    padding: "30px",
                  }}
                >
                  <img
                    style={{ width: "30%" }}
                    src="https://hicoder.in/assets/images/services/icons/modify/2.png"
                    alt=""
                  />
                  <h5>Design & Development</h5>
                  <p>
                    Students will learn to design mobile, desktop responsive web
                    components, layouts for products considering end users.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div
                  className="item"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F1F6FC",
                    borderRadius: "20px",
                    padding: "30px",
                  }}
                >
                  <img
                    style={{ width: "30%" }}
                    src="https://hicoder.in/assets/images/services/icons/modify/2.png"
                    alt=""
                  />
                  <h5>Design & Development</h5>
                  <p>
                    Students will learn to design mobile, desktop responsive web
                    components, layouts for products considering end users.
                  </p>
                </div>
                <div
                  className="item mt-3"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F1F6FC",
                    borderRadius: "20px",
                    padding: "30px",
                  }}
                >
                  <img
                    style={{ width: "30%" }}
                    src="https://hicoder.in/assets/images/services/icons/modify/2.png"
                    alt=""
                  />
                  <h5>Design & Development</h5>
                  <p>
                    Students will learn to design mobile, desktop responsive web
                    components, layouts for products considering end users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-syllabus pt-5">
        <div className="container">
          <h6>OUR SYLLABUS &</h6>
          <h1 style={{ color: "white", fontWeight: "800" }}>
            How HiCoders become product <br /> grade developer?
          </h1>
          <div className="row pb-5">
            {syllabus.map((sl) => (
              <div className="col-lg-4 col-md-12">
                <WLCard
                  scount={sl.scount}
                  stitle={sl.stitle}
                  sdetails={sl.sdetails}
                ></WLCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 pt-5">
            <h1 className="cmh pb-3">
              We help aspiring students get core dev jobs in the software
              industry.
            </h1>
            <h6 className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} color="blue" />
              &nbsp;&nbsp;End to End development
            </h6>
            <h6 className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} color="blue" />
              &nbsp;&nbsp;Pay after placement option
            </h6>
            <h6 className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} color="blue" />
              &nbsp;&nbsp;Pay after placement option
            </h6>
            <h6 className="py-1">
              <FontAwesomeIcon icon={faCheckCircle} color="blue" />
              &nbsp;&nbsp;Pay after placement option
            </h6>
            <Button
              variant="primary"
              style={{ fontWeight: "700" }}
              className="py-3 px-4 mt-4"
            >
              APPLY NOW
            </Button>{" "}
          </div>
          <div className="col-lg-6 col-md-12 pt-5">
            <img
              src="https://hicoder.in/assets/images/solutions/laptop.png"
              style={{ width: "100%", paddingTop: "60px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <Reviews></Reviews>
      <div className="container pt-5">
        <h2 className="cmh">Note:</h2>
        <ol>
          <li>
            <p>
              This is a fast pace full stack production curriculum. Students
              should spend at least 4 or more hours in product development to
              improve themselves to be a production grade engineer.
            </p>
          </li>
          <li>
            <p>
              The technologies mentioned in the above list will not be limited
              and will be customized as per new industry trends & standards
            </p>
          </li>
          <li>
            <p>
              A fast pace environment centralizes the student mindset to focus
              on project grade experience. Students should focus on instruction
              rather than picking random things from 3rd party shiny things from
              3rd party platforms. You will be able to develop shiny projects
              but get your basics cleared and then try picking once you are on
              the stage to develop without disturbing the curriculum.
            </p>
          </li>
          <li>
            <p>
              Few projects/topics may take longer than general and students
              should learn to cope with changes in the industry and execution.
            </p>
          </li>
        </ol>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WYLearn;
