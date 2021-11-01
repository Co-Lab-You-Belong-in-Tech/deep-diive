import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import image from "../../assets/figure_onboard.png";
import wave from "../../assets/wave_onboard.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import onboardingStyles from "./Onboarding.module.css";
import Navbar from "../../components/Navbar/Navbar";

//exit pop-up
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "47%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    width: "743px",
    height: "325px",
    border: "1px solid #dedede",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

//Slide show buttons
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#C3CBCD", fontSize: "32px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#C3CBCD", fontSize: "32px" }} />
    </div>
  );
};

//Shareable link (temporary)
const Copy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={onboardingStyles.div}>
      <input type="text" value={copyText} readOnly />
      <button className={onboardingStyles.cbutton}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

//Slide show
const Onboarding = () => {
  const [gameId, setGameId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const username = localStorage.getItem("deepdiive_name");

  useEffect(() => {
    const res = async () => {
      const { data } = await axios.post(
        `https://deepdiive.herokuapp.com/api/links/join/${gameId}`,
        { username: username }
      );
      return data;
    };
    res();
  }, [gameId, username]);

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(
        `https://deepdiive.herokuapp.com/api/links`
      );
      setGameId(data.gameId);
    };
    getUrl();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Exit Modal"
      >
        <p className={onboardingStyles.modalText}>
          Are you sure you want to exit?
        </p>
        <div className={onboardingStyles.modalButtons}>
          <button className={onboardingStyles.no} onClick={closeModal}>
            NO
          </button>
          <Link to="/feedback">
            <button className={onboardingStyles.yes}>YES</button>
          </Link>
        </div>
      </Modal>

      <div className={onboardingStyles.navDiv}>
        <Navbar openModal={openModal} />
      </div>

      <div className={onboardingStyles.slide}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          infinite={false}
          edgeFriction={0}
          direction={"right"}
        >
          <Card1 gameId={gameId} />
          <Card2 gameId={gameId} />
        </Slider>
      </div>
    </div>
  );
};

//Each slide
const Card1 = ({ gameId }) => {
  const name = localStorage.getItem("deepdiive_name");

  return (
    <div>
      <div className={onboardingStyles.view}>
        <h1>Nice to meet you, {name}! Time to invite your friends</h1>
        <h2>
          Copy the invite link below and share with one workmate. Use this{" "}
          <span className={onboardingStyles.highlight}>two player</span> game
          with your favourite video conference app!{" "}
        </h2>
        <p>
          (Don’t worry, if you’re confused, there will be instructions on how to
          play! 🙌 )
        </p>
        <div className={onboardingStyles.copybutton}>
          <p>Invite Link</p>
          <Copy copyText={`https://deepdiive.herokuapp.com/game/${gameId}`} />
        </div>
      </div>

      {/* <div className={onboardingStyles.wave}>
        <img src={wave} alt="wave" />
      </div> */}
    </div>
  );
};

const Card2 = ({ gameId }) => {
  return (
    <div className={onboardingStyles.view}>
      <h1>
        Is this your first time <br /> taking a DeepDiive?
      </h1>

      <div className={onboardingStyles.yesnobutton}>
        <div className={onboardingStyles.column} style={{ right: "867px" }}>
          <Link to={`/game/${gameId}`}>
            <button className={onboardingStyles.no}> NO </button>
          </Link>
          <p>Continue to the game.</p>
        </div>
        <div className={onboardingStyles.column} style={{ right: "600px" }}>
          <Link to={`/instruction/${gameId}`}>
            <button className={onboardingStyles.yes}> YES </button>
          </Link>
          <p>I want to read the insructions.</p>
        </div>
      </div>
      {/* <img src={image} alt="figure" /> */}
    </div>
  );
};

export default Onboarding;
