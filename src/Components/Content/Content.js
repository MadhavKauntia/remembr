import { useState } from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import FlexBox from "../UI/FlexBox/FlexBox";
import styles from "./Content.module.css";
import logo from "../../assets/taking-notes.svg";

const Content = (props) => {
  const [getStarted, setGetStarted] = useState(false);
  const [goBack, setGoBack] = useState(true);

  const goBackHandler = () => {
    setGetStarted(false);
  };
  return (
    <FlexBox className={styles.content}>
      <img className={styles.logo} src={logo} alt="taking notes" />
      {getStarted || <Landing setGetStarted={setGetStarted} />}
      {getStarted && <Login goBackHandler={goBackHandler} />}
    </FlexBox>
  );
};

export default Content;
