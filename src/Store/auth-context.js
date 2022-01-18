import React from "react";

const AuthContext = React.createContext({
  authDetails: {
    email: "",
    firstName: "",
    lastName: "",
  },
  isLoggedIn: false,
  setAuthDetails: (authDetails) => {},
  setIsLoggedIn: (isLoggedIn) => {},
});

export default AuthContext;
