import React from "react";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className="container mt-100">
      <div>
        <h2 className="text-center text-success fw-bold">Get in Touch</h2>
        <p className="txt-justify mt-3">
          Homemedicare started its journey in June 2021 and within few days due
          to its accuracy of the reports and quality of the service, Popular
          became an unparallel symbol of reliability and trust from the end of
          respective doctors and the people of our country. To get any service
          and support from us, please contact us.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-success fw-bold">The Office</h2>
        <p className="text-center mt-3">
          <FontAwesomeIcon className="me-3 text-danger" icon={faMapPin} />
          <span className="fw-bold">Address:</span> Homemedicare & Hospital Ltd.
          HOUSE # 16, ROAD # 2, DHANMONDI, DHAKA-1205.
        </p>
        <p className="text-center mt-2">
          <FontAwesomeIcon className="me-3 green-clr" icon={faPhoneAlt} />
          <span className="fw-bold">Phone:</span> +880 1712345678
        </p>
        <p className="text-center mt-2">
          <FontAwesomeIcon className="me-3 green-clr" icon={faEnvelope} />
          <span className="fw-bold">Email:</span> homemedicare@health.com
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-success fw-bold">Business Hours</h2>
        <p className="text-center mt-3">
          <FontAwesomeIcon className="me-3" icon={faClock} />7 AM - 11 PM
          (Everyday)
        </p>
      </div>
    </section>
  );
};

export default Contact;
