import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const authContext = {
    authDetails: authState,
    setAuthDetails: setAuthState,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
