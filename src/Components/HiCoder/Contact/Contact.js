import React from "react";
import NavBar from "../../Navs/NavBar";
import TopNav from "../../Navs/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelop, faCoffee } from "@fortawesome/free-solid-svg-icons";
import WCard from "../../Home/WLearn/WCard/WCard";
import Footer from "../../Home/Footer/Footer";
import FormPart from "./FormPart";
const Contact = () => {
  const contacts = [
    {
      cnIcon: "faEnvelop",
      cnTitle: "Phone Number",
      cnDetails: "(+91)9206 980 980",
    },
    {
      cnIcon: "faEnvelop",
      cnTitle: "Email Address",
      cnDetails: "hello@hicoder.in",
    },
    {
      cnIcon: "faCofee",
      cnTitle: "Office Address",
      cnDetails:
        "264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033",
    },
  ];
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh", backgroundColor: "#1C3987" }}
      >
        <h1 style={{ fontWeight: "800", color: "white", fontSize: "60px" }}>
          Contact Us
        </h1>
      </div>

      <div className="container">
        <div className="row my-5 d-flex justify-content-space-between">
          {contacts.map((ct) => (
            <div className="col-lg-4 col-md-12">
              <WCard
                cImage={ct.cnImage}
                cTitle={ct.cnTitle}
                cDetails={ct.cnDetails}
              ></WCard>
            </div>
          ))}
        </div>
      </div>
      <FormPart></FormPart>
      <div style={{ width: "100%", marginTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          style={{
            border: "0",
            width: "100%",
            height: "200",
            frameBorder: "0",
            minHeight: "70vh",
          }}
        ></iframe>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
