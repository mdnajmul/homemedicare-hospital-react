import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  let { serviceId } = useParams();
  const { services } = useAuth();
  const serviceDetail = services.filter(
    (service) => service.id === parseInt(serviceId)
  );

  const { name, descImg, description } = serviceDetail[0];
  return (
    <section className="container mt-5">
      <div className="text-center details-field">
        <h3 className="mb-3">{name}</h3>
        <div className="text-center">
          <img src={descImg} alt="" />
        </div>
        <h3 className="mt-5 text-start fw-bold">About The Department</h3>
        <p className="mt-3 txt-justify">{description}</p>
      </div>
    </section>
  );
};

export default ServiceDetail;
