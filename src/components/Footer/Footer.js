import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faHome,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-part">
      <div className="footer-top mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo d-flex mb-4">
                <img
                  src="./health-logo.png"
                  width="100"
                  height="70"
                  className="d-inline-block align-top fw-bold me-2"
                  alt="React Bootstrap logo"
                />
                <h1 className="text-white fw-bold fs-4 pt-3">
                  Homemedicare Hospital
                </h1>
              </div>
              <p className="txt-justify text-white fw-normal lh-lg pt-2">
                Welcome to Homemedicare Hospital Ltd. We offer Diagnostic
                service, 24 Hour Hospital Service & Specialist doctors
                Consultation. We provide the highest quality service from the
                moment we pick up the phone to schedule and appointment until we
                deliver the final diagnostic reports.
              </p>
              <p className="text-start">
                <FontAwesomeIcon
                  className="me-1 font-icon fb-icon fs-3"
                  icon={faFacebook}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon yt-icon fs-3"
                  icon={faYoutube}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon tw-icon fs-3"
                  icon={faTwitter}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon in-icon fs-3"
                  icon={faInstagram}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon ln-icon fs-3"
                  icon={faLinkedinIn}
                />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link">
                <div className="footer-title me-5 mb-5 mt-3 ms-5">
                  <h1 className="text-white fw-bold fs-2">Sitemap</h1>
                </div>
                <div className="d-flex justify-content-between ms-3">
                  <ul className="text-start">
                    <li className="lh-lg">
                      <Link className="text-decoration-none text-white" to="/">
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Home</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/aboutus"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">About us</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/services"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Services</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">News</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="text-start">
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/parmacy"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Parmacy</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/doctors"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Doctors</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/support"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Support</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/contact"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link">
                <div className="footer-title ms-4 mb-5 mt-3">
                  <h1 className="text-white fw-bold fs-2 ms-2">Support</h1>
                </div>
                <ul className="text-start ms-1">
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/faqs"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">FAQS</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/privacy"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Privacy</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/policy"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Policy</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/documentation"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Documentation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address">
                <div className="footer-title mb-5 mt-3 ms-5">
                  <h1 className="text-white fw-bold fs-2">Contact Us</h1>
                </div>
                <ul className="ms-3">
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div>
                      <p className="text-start">
                        HOUSE # 16, ROAD # 2, DHANMONDI, DHAKA-1205.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div>
                      <p className="text-start">+880 1712345678</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <p className="text-start">homemedicare@health.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between pt-4 pb-3">
          <p className="text-white fw-bold">
            &copy; Copyrights {new Date().getFullYear()} Homemedicare Hospital
            All rights reserved.
          </p>
          <p className="text-white fw-bold">Designed by najmulovi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
