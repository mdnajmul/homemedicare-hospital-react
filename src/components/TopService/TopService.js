import React from "react";
import "./TopService.css";

const TopService = () => {
  return (
    <section className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 top-service">
          <div className="text-center mb-2">
            <img src="./health-services/feature1.png" alt="" />
          </div>
          <h3 className="text-center mb-3">Excellent Service</h3>
          <p className="text-center">
            Homemedicare &#38; Hospital Ltd offers you a great excellant service
            in health sector. Aalok has the diagnostic service &amp; Hospital
            service.
          </p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 top-service">
          <div className="text-center mb-2">
            <img src="./health-services/feature2.png" alt="" />
          </div>
          <h3 className="text-center mb-3">Qualified Doctors</h3>
          <p className="text-center">
            Homemedicare &#38; Hospital Ltd has many specialist doctors.Most of
            them are Professor &#38; Assoc. Professor.
          </p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 top-service">
          <div className="text-center mb-2">
            <img src="./health-services/feature3.png" alt="" />
          </div>
          <h3 className="text-center mb-3">Quality Equipment</h3>
          <p className="text-center">
            Homemedicare &#38; Hospital Ltd always offers the qualityfull
            equipments. All Machines are imported from Abroad.
          </p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 top-service">
          <div className="text-center mb-2">
            <img src="./health-services/feature4.png" alt="" />
          </div>
          <h3 className="text-center mb-3">Emergency Services</h3>
          <p className="text-center">
            Homemedicare &#38; Hospital Ltd is always ready with their
            Emmergency Service for the critical patients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopService;
