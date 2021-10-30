import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle, signInUsingGitHub, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGitHubSignIn = () => {
    signInUsingGitHub()
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const updateUserProfile = () => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegistration = (e) => {
    setIsLoading(false);
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        updateUserProfile();
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="login-field">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <div className="login text-center">
              <h2 className="">Sign Up</h2>
              <form onSubmit={handleRegistration}>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                  <input
                    type="text"
                    onBlur={handleNameChange}
                    className="form-control"
                    placeholder="Name"
                    ariaLabel="Name"
                    ariaDescribedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap mt-3">
                  <span className="input-group-text" id="addon-wrapping">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                  <input
                    type="email"
                    onBlur={handleEmailChange}
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
                    onBlur={handlePasswordChange}
                    className="form-control"
                    placeholder="Password"
                    ariaLabel="Password"
                    ariaDescribedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap mt-3">
                  <span className="input-group-text" id="addon-wrapping">
                    <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                  </span>
                  <input
                    type="text"
                    onBlur={handlePhoneChange}
                    className="form-control"
                    placeholder="Phone"
                    ariaLabel="Phone"
                    ariaDescribedby="addon-wrapping"
                  />
                </div>
                <div className="mt-3 text-danger">
                  <span>{error}</span>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn login-btn">
                    Sign Up
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="or-txt">Or register with</span>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn px-5 py-2 google-btn"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="me-2 google-icon-clr"
                      ></FontAwesomeIcon>
                      <span className="google-txt">Google</span>
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <button
                      onClick={handleGitHubSignIn}
                      className="btn px-5 py-2 google-btn"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="me-2 google-icon-clr"
                      ></FontAwesomeIcon>
                      <span className="google-txt">GitHub</span>
                    </button>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <span className="or-txt">Already a member? </span>
                  <Link to="/login" className="or-txt">
                    Sign in now
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

export default Register;
