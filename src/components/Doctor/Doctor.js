import React from "react";
import "./Doctor.css";

const Doctor = (props) => {
  const { name, img, department, degree, work } = props.doctor;
  return (
    <div className="service-field">
      <img className="img-fluid" src={img} alt="" />
      <h2 className="text-center mt-3 fs-6 fw-bold">{name}</h2>
      <p className="text-center">{department}</p>
      <p className="text-center mt-2 fs-14">{degree}</p>
      <p className="text-center">{work}</p>
    </div>
  );
};

export default Doctor;
