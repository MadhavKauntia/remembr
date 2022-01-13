import "./Landing.css";

const Landing = (props) => {
  return (
    <div className="landing">
      <h1 className="landing-header">
        <span className="landing-header__remembr">remembr </span>
        <span className="landing-header__description">
          helps you learn better.
        </span>
      </h1>
      <p className="landing__description">
        <span style={{ fontWeight: "bold" }}>remembr </span>
        uses techniques like spaced retention, quizzing and summarizing to help
        you retain what you learn.
      </p>
      <p className="landing__description_small">
        A project by{" "}
        <a href="https://twitter.com/MadhavKauntia" target="_blank">
          Madhav Kauntia
        </a>
      </p>
      <div className="linkedin_post">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6886882966098857984"
          height="400"
          width="503"
          frameborder="0"
          title="Embedded post"
        ></iframe>
      </div>
      <button className="landing__button">Get Started</button>
    </div>
  );
};

export default Landing;
