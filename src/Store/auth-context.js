import React from "react";

const AuthContext = React.createContext({
  authDetails: {
    email: "",
    firstName: "",
    lastName: "",
  },
  isLoggedIn: false,
  setAuthDetails: (authDetails) => { },
  setIsLoggedIn: (isLoggedIn) => { },
  notes: [],
  setNotes: (notes) => { }
});

export default AuthContext;
