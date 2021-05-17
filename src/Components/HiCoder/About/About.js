import React from "react";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Navs/NavBar";
import TopNav from "../../Navs/TopNav";

const About = () => {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh", backgroundColor: "#1C3987" }}
      >
        <h1 style={{ fontWeight: "800", color: "white", fontSize: "60px" }}>
          About
        </h1>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/solutions/laptop.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-12 py-5">
            <h1 style={{ fontWeight: 800 }}>What is HiCoder?</h1>
            <p style={{ textAlign: "justify" }}>
              HiCoder is a technology skilling platform that helps students
              learn industry-grade software engineering by industry experts,
              startups, entrepreneurs, and experienced mentors. We build an
              environment that enables students to learn by building with
              trending technologies and pay only when you get a job.
            </p>
          </div>
        </div>

        <div className="row my-5 d-flex align-items-center">
          <div className="col-lg-4 col-md-12">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src="https://hicoder.in/assets/images/about/inner/HICODER1.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-12 py-5">
            <h1 style={{ fontWeight: 800, fontSize: "70px" }}>The Problem</h1>
            <p style={{ textAlign: "justify" }}>
              1,50,000 engineering graduates pass every year in India, Almost
              20% of them get jobs in their core industry. The rest 80% of
              students end up having a job role that has nothing to do with the
              core engineering they studied in. Those Students are forced to
              take a job due to family pressure, peer pressure, or their
              financial status.
            </p>
          </div>
        </div>
        <div className="row my-5 d-flex align-items-center">
          <div className="col-lg-8 col-md-12 py-5">
            <h1 style={{ fontWeight: 800, fontSize: "70px" }}>The Solution</h1>
            <p style={{ textAlign: "justify" }}>
              HiCoder with industry experts (including software designer,
              developer, manager, architect) assembles frontend, backend, API,
              DS, Algorithms and etc, and encourages students to think and learn
              development with a product building approach than a traditional
              single technology learning. It enables students to become an
              engineer that industry demands and team leads love to work.
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src="https://hicoder.in/assets/images/about/inner/HICODER1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row my-5 d-flex align-items-center">
          <div className="col-lg-4 col-md-12">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src="https://hicoder.in/assets/images/about/inner/HICODER1.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-md-12 py-5">
            <h1 style={{ fontWeight: 800, fontSize: "70px" }}>Vision</h1>
            <p style={{ textAlign: "justify" }}>
              HiCoder goal is to mentor 10,000+ students by 2023 with
              industry-trending technology, resources, and product grade
              development practices. Our target is to help students who have
              technical academics and considering joining, change, and join the
              IT Industry. The platform will also allow highly enthusistic
              students to participate in it's skilling programme to help
              students get a technical job in the Industry.
            </p>
          </div>
        </div>

        {/*---------- Counter animation---------- */}
        <div className="row my-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-12">
            <h1 style={{ fontWeight: 800 }}>Who trains students at HiCoder?</h1>
            <p style={{ textAlign: "justify" }}>
              HiCoder mentors & associates are industry experts on respective
              subjects, software architects, DevOps engineers, Scrum Experts,
              and people who understand and have developed, built products, and
              worked directly with clients.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/about/2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row my-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-12">
            <img
              style={{ width: "100%" }}
              src="https://hicoder.in/assets/images/about/3.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 style={{ fontWeight: 800 }}>How classes are conducted?</h1>
            <p style={{ textAlign: "justify" }}>
              All Classes are live and conducted online. Every student has their
              own style of learning there we allocate after-class teaching
              assistants for students to clear and catch up with their peers.
              This course is ideal for students who want to get a job, change
              their job, or want to become an entrepreneur with a software
              product.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
