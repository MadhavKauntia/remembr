import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Header from "../UI/Header/Header";
import Description from "../UI/Description/Description";

const clientId =
  "867858414838-c9eguojgjfrdgnrngbmtislb25tov0d4.apps.googleusercontent.com";

const Login = (props) => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  const goBackHandler = () => {};

  return (
    <Card>
      <Header>Login using Google</Header>
      <Description>Get started by signing in with Google</Description>
      <div>
        <Button onClick={props.goBackHandler}>Go Back</Button>
        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </Card>
  );
};
export default Login;
