import { useState, useContext } from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import FlexBox from "../UI/FlexBox/FlexBox";
import styles from "./Content.module.css";
import logo from "../../assets/taking-notes.svg";
import NotesPage from "../Notes/NotesPage";
import AuthContext from "../../Store/auth-context";

const Content = (props) => {
  const authCtx = useContext(AuthContext);
  const [getStarted, setGetStarted] = useState(false);
  const goBackHandler = () => {
    setGetStarted(false);
  };
  return (
    <>
      {authCtx.isLoggedIn || (
        <FlexBox className={styles.content}>
          <img className={styles.logo} src={logo} alt="taking notes" />
          {getStarted || <Landing setGetStarted={setGetStarted} />}
          {getStarted && <Login goBackHandler={goBackHandler} />}
        </FlexBox>
      )}
      {authCtx.isLoggedIn && <NotesPage />}
    </>
  );
};

export default Content;
