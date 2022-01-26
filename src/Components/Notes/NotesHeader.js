import styles from "./NotesHeader.module.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";

const NotesHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const onSignoutSuccess = () => {
    authCtx.setAuthDetails({
      email: "",
      firstName: "",
      lastName: "",
    });
    authCtx.setIsLoggedIn(false);
    console.clear();
  };
  return (
    <div className={styles.header}>
      <h1>remembr</h1>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default NotesHeader;
