import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Landing_Page_png.png";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import landingStyles from "./Landing.module.css";
import chromeIcon from "../../assets/chrome.svg";

const Landing = () => {
  const [user, setUser] = useState("");
  const [nameError, setNameError] = useState(false);

  const navigate = useNavigate();

  const validateName = (e) => {
    e.preventDefault();
    if (user.length < 1) {
      setNameError(true);
    } else{
        setNameError(false);
        navigate(`/v1/onboarding`);
    }
  };

  const changeHandler = (e) => {
    const deepdiive_host = e.target.value;

    localStorage.setItem("deepdiive_host", deepdiive_host);
    setUser(deepdiive_host);
    console.log(user);
  };

  return (
    <div className={landingStyles.landing}>
      <nav>
        <div className={landingStyles.logoDiv}>
          <img className={landingStyles.icon} src={logoIcon} alt="" />
          <img src={logo} alt="" />
        </div>
      </nav>

      <div className={landingStyles.grid}>
        <img src={image} alt="" />
        <div>
          <div className={landingStyles.title}>
            <span>
              Ride the Wave of <br />
            </span>
            <span>Better Conversations</span>
          </div>
          <p>
            Unwind with workmates and have meaningful conversations using our virtual card deck. 
            Take turns answering questions from the selected cards 
            <span className={landingStyles.highlight}> alongside your favorite video chat platform.</span>
          </p>
          <p className={landingStyles.chrome}>Best Experience with 
            <span className={landingStyles.highlight}> Google Chrome </span><img src={chromeIcon} alt="chrome" /></p>
          <p>Enter your name below to get started!</p>
          <form className={landingStyles.form} onSubmit={validateName}>
            <label htmlFor="name">Name <span>*</span></label>
            <input
              value={user}
              placeholder="Your name"
              id="name"
              onChange={changeHandler}
            />
              <button>Let’s Go!</button>
            {nameError && <div className={landingStyles.errorDiv}><p className={landingStyles.error}>Please enter your name</p></div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;