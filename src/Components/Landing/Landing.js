import Button from "../UI/Button/Button";
import "./Landing.css";
import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import Description from "../UI/Description/Description";

const Landing = (props) => {
  const getStartedHandler = () => {
    props.setGetStarted(true);
  };
  return (
    <Card>
      <Header>
        <span className="landing-header__remembr">remembr </span>
        <span className="landing-header__description">
          helps you learn better.
        </span>
      </Header>
      <Description>
        <span style={{ fontWeight: "bold" }}>remembr </span>
        uses techniques like spaced retention, quizzing and summarizing to help
        you retain what you learn.
      </Description>
      <p className="landing__description_small">
        A project by{" "}
        <a
          href="https://twitter.com/MadhavKauntia"
          target="_blank"
          rel="noreferrer"
        >
          Madhav Kauntia
        </a>
      </p>
      <div className="linkedin_post">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6886882966098857984"
          height="400"
          width="503"
          frameBorder="0"
          title="Embedded post"
        ></iframe>
      </div>
      <Button onClick={getStartedHandler}>Get Started</Button>
    </Card>
  );
};

export default Landing;
