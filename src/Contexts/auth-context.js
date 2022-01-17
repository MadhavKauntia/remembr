import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: "",
  firstName: "",
  lastName: "",
});

export default AuthContext;
