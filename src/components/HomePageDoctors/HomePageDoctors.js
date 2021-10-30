import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Doctor from "../Doctor/Doctor";

const HomePageDoctors = () => {
  const { doctors } = useAuth();
  const homePageDoctors = doctors.slice(0, 6);

  return (
    <section className="container mt-5">
      <div>
        <h2 className="text-center text-success fw-bold">SENIOR DOCTORS</h2>
        <p className="text-center mt-3 text-gray">
          Homemedicare & Hospital Ltd has many consultant doctor in different
          category.
        </p>
        <h3 className="text-end">
          <NavLink className="text-decoration-none" to="/doctors">
            All Doctors <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </h3>
      </div>
      <div className="home-services-field mt-3">
        {homePageDoctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default HomePageDoctors;
