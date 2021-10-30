import React from "react";
import { NavLink } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, img, shortDesc } = props.service;
  return (
    <div className="service-field">
      <div className="text-center mt-3">
        <img src={img} alt="" />
      </div>
      <h2 className="text-center mt-2 fs-6 fw-bold">{name}</h2>
      <p className="txt-justify fs-6 mt-3 px-3">{shortDesc}</p>
      <div className="mb-3 mt-3">
        <NavLink
          className="text-decoration-none me-3 header-top-btn"
          style={{ marginLeft: "120px" }}
          to={`/servicedetails/${id}`}
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
