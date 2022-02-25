import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import onboardingStyles from "./Onboarding.module.css";
import Navbar from "../../components/Navbar_blue/Navbar";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import deepdiiveApi from "../../api/deepdiiveApi";

//exit pop-up modal
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
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};

//Shareable link (temporary)
const Copy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);
  const text = useRef(null);

  function copyClipboard(event) {
    text.current.select();
    document.execCommand("copy");
    event.target.focus();
    setIsCopied("Copied!");
  }

  return (
    <div className={onboardingStyles.div}>
      <input ref={text} type="text" value={copyText} readOnly />
      <button onClick={copyClipboard} className={onboardingStyles.cbutton}>
        Copy
      </button>{" "}
      {isCopied}
    </div>
  );
};

//Slide show
const Onboarding = () => {
  const [gameId, setGameId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const username = localStorage.getItem("deepdiive_host");

  useEffect(() => {
    const res = async () => {
      const { data } = await deepdiiveApi.post(
        `/links/join/${gameId}`,
        { username: username }
      );
      return data;
    };
    res();
  }, [gameId, username]);

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await deepdiiveApi.get(
        `/links`
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
        ariaHideApp={false}
        contentLabel="Exit Modal"
        closeTimeoutMS={300}
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

      {!gameId && <div className={onboardingStyles.loadingDiv}><LoadingCard /></div>}

      {gameId && <div className={onboardingStyles.slide}>
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
      </div>}
    </div>
  );
};

//Each slide
const Card1 = ({ gameId }) => {
  const name = localStorage.getItem("deepdiive_host");
  
  return (
    <div>
      <div className={onboardingStyles.view}>
        <h1>Nice to meet you, {name}! Time to invite your workmate.</h1>
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
          <Copy copyText={`https://deepdiive.netlify.app/game/${gameId}`} />
        </div>
      </div>
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
        <div className={onboardingStyles.column} style={{ right: "812px" }}>
          <Link to={`/start/${gameId}`}>
            <button className={onboardingStyles.no}> NO </button>
          </Link>
          <p>Continue to the game.</p>
        </div>
        <div className={onboardingStyles.column} style={{ right: "512px" }}>
          <Link to={`/instruction/${gameId}`}>
            <button className={onboardingStyles.yes}> YES </button>
          </Link>
          <p>I want to read the instructions.</p>
        </div>
      </div>
      {/* <img src={image} alt="figure" /> */}
    </div>
  );
};

export default Onboarding;
