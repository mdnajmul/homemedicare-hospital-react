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
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingGitHub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    signInUsingGitHub,
    logOut,
    services,
    doctors,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
