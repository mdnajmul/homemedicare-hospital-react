import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <section className="container mt-5">
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
  );
};

export default BottomNav;
