import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingGitHub } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInUsingGitHub()
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const processLogin = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-field">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <div className="login text-center">
              <h2 className="">Sign In</h2>
              <form onSubmit={processLogin}>
                <div className="input-group flex-nowrap">
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
                <div className="mt-3 text-danger">
                  <span>{error}</span>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn login-btn">
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="or-txt">Or login with</span>
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
