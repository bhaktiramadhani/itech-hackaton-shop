import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedAuth = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (user === null) return <Navigate to={"/login"} />;
  return props.children;
};

export default ProtectedAuth;
