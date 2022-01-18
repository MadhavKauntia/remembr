import React from "react";

const AuthContext = React.createContext({
  authDetails: {
    email: "",
    firstName: "",
    lastName: "",
  },
  setAuthDetails: (authDetails) => {},
});

export default AuthContext;
