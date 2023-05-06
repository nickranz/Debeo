import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider1({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function getName() {
    return firebase.auth().currentUser.displayName;
  }

  function setName(name) {
    console.log("name: ", name);
    // Get the current user object
    const currentUser = firebase.auth().currentUser;

    // Set the display name using the updateProfile method
    return currentUser.updateProfile({
      displayName: { name },
    });
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    setName,
    getName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
