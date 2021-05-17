import React from "react";
import NavBar from "../Navs/NavBar";
import TopNav from "../Navs/TopNav";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MBody from "./MBody/MBody";
import News from "./News/News";
import Partners from "./Partners/Partners";
import Reviews from "./Reviews/Reviews";
import TBody from "./TBody/TBody";
import Wlearn from "./WLearn/Wlearn";

const Home = () => {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <Header></Header>
      <TBody></TBody>
      <MBody></MBody>
      <Wlearn></Wlearn>
      <Reviews></Reviews>
      <Partners></Partners>
      <News></News>
      <Footer></Footer>

      {/* topnav<
            navbar<
            Home
                headert<
                tbody< 
                mbody< 
                what you learn<
                Reviews<
                Partner<
                news <
            hi coder
              about<
              contact
              blogs
            course 
            hire 
            
            footer< */}
    </div>
  );
};

export default Home;
