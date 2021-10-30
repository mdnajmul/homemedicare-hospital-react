import React from "react";
import useAuth from "../../hooks/useAuth";
import Doctor from "../Doctor/Doctor";

const AllDoctors = () => {
  const { doctors } = useAuth();
  return (
    <section className="container mt-100">
      <div>
        <h2 className="text-center text-success fw-bold">ALL DOCTORS</h2>
      </div>
      <div className="home-services-field mt-3">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default AllDoctors;
