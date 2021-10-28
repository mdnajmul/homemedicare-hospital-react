import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
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
            <NavLink
              to="/home"
              className="ms-5 text-white fw-bold hover text-decoration-none mt-1"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="ms-5 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="ms-5 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              Our Services
            </NavLink>
            <NavLink
              to="/doctors"
              className="ms-5 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/contact"
              className="ms-5 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              Contact
            </NavLink>
            {user.displayName && (
              <span className="ms-5 text-white fw-bold mt-1">
                Hello ! {user.displayName}
              </span>
            )}
            {user.displayName ? (
              <div className="my-auto">
                <button
                  className="text-decoration-none ms-3 logout-btn"
                  onClick={logOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
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
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
