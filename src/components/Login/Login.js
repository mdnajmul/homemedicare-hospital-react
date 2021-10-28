import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-field">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <div className="login text-center">
              <h2 className="">Sign In</h2>
              <form>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    ariaLabel="Email"
                    ariaDescribedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap mt-3">
                  <span className="input-group-text" id="addon-wrapping">
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    ariaLabel="Password"
                    ariaDescribedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="mt-3">
                  <button type="button" className="btn login-btn">
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="or-txt">Or login with</span>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <button className="btn px-5 py-2 google-btn">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="me-2 google-icon-clr"
                      ></FontAwesomeIcon>
                      <span className="google-txt">Google</span>
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <button className="btn px-2 google-btn">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="me-2 google-icon-clr"
                      ></FontAwesomeIcon>
                      <span className="google-txt">Email/Password</span>
                    </button>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <span className="or-txt">Not a member? </span>
                  <Link to="/register" className="or-txt">
                    Sign up now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
