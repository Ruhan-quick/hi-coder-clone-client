import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(!show2);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  return (
    <div className=" navbar-style">
      <Navbar expand="lg" className="container pt-3 pb-3 ">
        <Navbar.Brand as={Link} to="/home">
          Hi Coder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown
              title="Hi Coder"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="COURSE"
              id="basic-nav-dropdown"
              show={show2}
              onMouseEnter={showDropdown2}
              onMouseLeave={hideDropdown2}
            >
              <NavDropdown.Item as={Link} to="wylearn">
                What You Learn.
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/htapply">
                How to Apply
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
