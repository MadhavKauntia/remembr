import { useState } from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import "./Content.css";

const Content = (props) => {
  const [getStarted, setGetStarted] = useState(false);
  const [goBack, setGoBack] = useState(true);

  const goBackHandler = () => {
    setGetStarted(false);
  };
  return (
    <div className="content">
      {getStarted || <Landing setGetStarted={setGetStarted} />}
      {getStarted && <Login goBackHandler={goBackHandler} />}
    </div>
  );
};

export default Content;
