import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Header from "../UI/Header/Header";
import Description from "../UI/Description/Description";
import AuthContext from "../../Store/auth-context";

const Login = (props) => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const authCtx = useContext(AuthContext);
  const onLoginSuccess = (res) => {
    setShowloginButton(false);
    setShowlogoutButton(true);
    authCtx.setAuthDetails({
      email: res.profileObj.email,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
    });
    authCtx.setIsLoggedIn(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <Card>
      <Header>Login using Google</Header>
      <Description>Get started by signing in with Google</Description>
      <div>
        <Button onClick={props.goBackHandler}>Go Back</Button>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </Card>
  );
};
export default Login;
