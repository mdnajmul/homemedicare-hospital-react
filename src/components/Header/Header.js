import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="./health-logo.png" width="280" height="150" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex mt-5">
            <span className="me-3">
              <FontAwesomeIcon className="me-3 green-clr" icon={faEnvelope} />
              <span className="green-clr" role="button">
                {" "}
                Email Us{" "}
              </span>
              <p className="fw-bold">homemedicare@health.com</p>
            </span>
            <span className="me-3">
              <FontAwesomeIcon className="me-3 green-clr" icon={faPhoneAlt} />
              <span className="green-clr"> Hotline </span>
              <p className="fw-bold">09612 654321</p>
            </span>
            <span>
              <FontAwesomeIcon className="me-3 green-clr" icon={faClock} />
              <span className="green-clr"> Working Hour </span>
              <p className="fw-bold">7AM - 11PM (Everyday)</p>
            </span>
          </div>
        </div>
      </section>

      {/* nav bar */}
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="mx-5">
            HOMEMEDICARE & HOSPITAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className="ms-5 text-white fw-bold hover"
                activeClassName="active"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="ms-5 text-white fw-bold hover"
                activeClassName="active"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#action3"
                className="ms-5 text-white fw-bold hover"
                activeClassName="active"
              >
                Our Services
              </Nav.Link>
              <Nav.Link
                href="#action3"
                className="ms-5 text-white fw-bold hover"
                activeClassName="active"
              >
                Doctors
              </Nav.Link>
              <Nav.Link
                href="#action3"
                className="ms-5 text-white fw-bold hover"
                activeClassName="active"
              >
                Contact
              </Nav.Link>
              <div className="my-auto">
                <NavLink
                  className="text-decoration-none me-3 header-top-btn"
                  style={{ marginLeft: "120px" }}
                  to="/login"
                >
                  Sign In
                </NavLink>
                <NavLink
                  className="text-decoration-none header-top-btn"
                  to="/register"
                >
                  Sign Up
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
