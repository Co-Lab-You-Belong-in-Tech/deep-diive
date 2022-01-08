import feedbackStyles from "./Feedback.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import wave from "../../assets/wave_exit.png";
import figure from "../../assets/figure_exit.png";
import logo from "../../assets/logo-blue.svg";
import logoIcon from "../../assets/logo_circle.png";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className={feedbackStyles.row}>
      <div className={feedbackStyles.column}>
        <div className={feedbackStyles.navDiv}>
          <img className={feedbackStyles.icon} src={logoIcon} alt="logo" />
          <Link to={`/`}><img className={feedbackStyles.name} src={logo} alt="logo" /></Link>
        </div>
        <img
          style={{
            width: "60%",
            height: "60%",
            marginLeft: "165px",
            marginTop: "160px",
            marginBottom: "0",
          }}
          src={figure}
          alt="figure"
        />
      </div>
      <div className={feedbackStyles.column}>
        <h1>
          Hope you had fun, <br /> see you again soon!
        </h1>
        <button
          className={feedbackStyles.rbutton}
          onClick={() => {
            window.open(
              "https://survey.typeform.com/to/aABypw3e?typeform-source=trello.com",
              "_blank"
            );
          }}
        >
          LEAVE A REVIEW
        </button>
        <hr />
        <h2>
          Tell your workmates <br /> about DeepDiive!
        </h2>
        <div className={feedbackStyles.social}>
          <SocialMedia />
        </div>
      </div>
      <div className={feedbackStyles.column}>
        <img
          style={{ height: "100vh", bottom: "0", top: "-100", zIndex: "-1" }}
          src={wave}
          alt="wave"
        />
      </div>
    </div>
  );
};

export default Feedback;
