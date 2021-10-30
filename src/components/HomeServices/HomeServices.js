import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Service from "../Service/Service";
import "./HomeServices.css";

const HomeServices = () => {
  const { services } = useAuth();
  const homefieldServices = services.slice(0, 6);

  return (
    <section className="container mt-5">
      <div>
        <h2 className="text-center text-success fw-bold">OUR SERVICES</h2>
        <p className="text-center mt-3 text-gray">
          Homemedicare & Hospital Ltd offers different kinds of service to their
          patients.
        </p>
        <h3 className="text-end">
          <NavLink className="text-decoration-none" to="/services">
            All Services <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </h3>
      </div>
      <div className="home-services-field mt-3">
        {homefieldServices.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
