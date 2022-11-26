import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import landingStyles from "./Landing.module.css";
import chromeIcon from "../../assets/svg/chrome.svg";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Preloader from "../../components/Preloader/Preloader";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";
// import ReactGA from "react-ga";

const Landing = () => {
  const [user, setUser] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  const navigate = useNavigate();

  const validateName = (e) => {
    e.preventDefault();
    if (user.length < 1) {
      toast.error("Please enter your name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      navigate(`/onboarding`);
    }
  };

  const changeHandler = (e) => {
    const deepdiive_host = e.target.value;

    localStorage.setItem("deepdiive_host", deepdiive_host);
    setUser(deepdiive_host);
  };

  return showLoader ? (
    <Preloader />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={landingStyles.landing}>
        <nav>
          <div className={landingStyles.logoDiv}>
            <img className={landingStyles.icon} src={logoIcon} alt="" />
            <img src={logo} alt="" className={landingStyles.deepdiive} />
          </div>
        </nav>

        <div className={landingStyles.grid}>
          <img
            src={DEEPDIIVE_IMAGES.landingPageImage}
            alt=""
            className={landingStyles.bigImage}
          />
          <div>
            <div className={landingStyles.title}>
              <span>
                Ride the Wave of <br />
              </span>
              <span>Better Conversations</span>
            </div>
            <p>
              Unwind with workmates and have meaningful conversations using our
              virtual card deck. Take turns answering questions from the
              selected cards
              <span className={landingStyles.highlight}>
                {" "}
                alongside your favorite video chat platform.
              </span>
            </p>
            <p className={landingStyles.chrome}>
              Best Experience with
              <span className={landingStyles.highlight}> Google Chrome </span>
              <img src={chromeIcon} alt="chrome" />
            </p>
            <p>Enter your name below to get started!</p>
            <form className={landingStyles.form} onSubmit={validateName}>
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input
                value={user}
                placeholder="Your name"
                id="name"
                onChange={changeHandler}
              />
              <button>Let’s Go!</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
