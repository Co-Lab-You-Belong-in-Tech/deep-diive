import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import image from "../../assets/Landing_Page_png.png";
import invitedStyles from "./InviteOnboarding.module.css";
import chromeIcon from "../../assets/chrome.svg";
import { motion } from "framer-motion";

const InviteOnboarding = () => {
  const [user, setUser] = useState("");
  const [nameError, setNameError] = useState(false);
  const { gameId } = useParams();

  const navigate = useNavigate();

  const validateName = (e) => {
    e.preventDefault();
    if (user.length < 1) {
      setNameError(true);
    } else{
        setNameError(false);
        navigate(`/instruction/invite/${gameId}`);
    }
  };

  const changeHandler = (e) => {
    const deepdiive_guests = e.target.value;

    localStorage.setItem("deepdiive_guests", deepdiive_guests);
    setUser(deepdiive_guests);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div className={invitedStyles.invite}>
      <nav>
        <div className={invitedStyles.logoDiv}>
          <img className={invitedStyles.icon} src={logoIcon} alt="" />
          <img src={logo} alt="" className={invitedStyles.deepdiive} />
        </div>
      </nav>

      <div className={invitedStyles.grid}>
        <img src={image} alt="" className={invitedStyles.bigImage} />
        <div>
          <div className={invitedStyles.title}>
            <span>
              Ride the Wave of <br />
            </span>
            <span>Better Conversations</span>
          </div>
          <p>
            Unwind with workmates and have meaningful conversations using our virtual card deck. 
            Take turns answering questions from the selected cards 
            <span className={invitedStyles.highlight}> alongside your favorite video chat platform.</span>
          </p>
          <p className={invitedStyles.chrome}>Best Experience with 
            <span className={invitedStyles.highlight}> Google Chrome </span><img src={chromeIcon} alt="chrome" /></p>
          <p>Enter your name below to get started!</p>
          <form className={invitedStyles.form} onSubmit={validateName}>
            <label htmlFor="name">Name <span>*</span></label>
            <input
              value={user}
              placeholder="Your name"
              id="name"
              onChange={changeHandler}
            />
              <button>Let’s Go!</button>
            {nameError && <div className={invitedStyles.errorDiv}><p className={invitedStyles.error}>Please enter your name</p></div>}
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default InviteOnboarding;
