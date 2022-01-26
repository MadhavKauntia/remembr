import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notes, setNotes] = useState([]);
  const authContext = {
    authDetails: authState,
    isLoggedIn: isLoggedIn,
    setAuthDetails: setAuthState,
    setIsLoggedIn: setIsLoggedIn,
    notes: notes,
    setNotes: setNotes
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
