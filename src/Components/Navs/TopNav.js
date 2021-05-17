import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./TopNav.css";
const TopNav = () => {
  return (
    <div className="topnav-style">
      <Navbar expand="lg" className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="tnt" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="tnt" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
