import React from "react";
import useAuth from "../../hooks/useAuth";
import Service from "../Service/Service";

const AllServices = () => {
  const { services } = useAuth();
  return (
    <section className="container mt-100">
      <div>
        <h2 className="text-center text-success fw-bold">ALL SERVICES</h2>
      </div>
      <div className="home-services-field mt-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
