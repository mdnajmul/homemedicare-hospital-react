import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./healthServices.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingGitHub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    signInUsingGitHub,
    logOut,
    services,
    doctors,
  };
};

export default useFirebase;
