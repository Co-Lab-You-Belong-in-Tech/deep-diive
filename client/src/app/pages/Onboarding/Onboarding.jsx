import { useState, useEffect, useRef, useContext } from "react";
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
import ExitModal from "../../components/ExitModal/ExitModal";
import { GlobalContext } from "../../context/GlobalState";

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
  const { modalIsOpen } = useContext(GlobalContext);

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

  return (
    <div>
      {modalIsOpen && <ExitModal />}

      <div className={onboardingStyles.navDiv}>
        <Navbar />
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
          {/* production */}
          {/* <Copy copyText={`https://deepdiive.netlify.app/game/${gameId}`} /> */}
          {/* staging */}
          <Copy copyText={`https://deepdiive-staging.netlify.app/game/${gameId}`} />
          {/* local */}
          {/* <Copy copyText={`http://localhost:3000/game/${gameId}`} /> */}
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
    </div>
  );
};

export default Onboarding;
