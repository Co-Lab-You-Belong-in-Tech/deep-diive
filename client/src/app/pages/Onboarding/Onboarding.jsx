import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import image from "../../assets/image_onboard.svg";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import onboardingStyles from "./Onboarding.module.css";
//import {CopyToClipboard} from 'react-copy-to-clipboard';

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
      <button className={onboardingStyles.button}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

//Slide show
const Onboarding = () => {
  const [gameId, setGameId] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(`http://localhost:8080/links`);
      setGameId(data.gameId);
    };
    getUrl();
  }, []);

  return (
    <div className={onboardingStyles.slide}>
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        dots
        infinite={false}
        edgeFriction={0}
      >
        <Card1 gameId={gameId} />
        <Card2 />
        <Card3 gameId={gameId} />
      </Slider>
    </div>
  );
};

//Each slide
const Card1 = ({gameId}) => {
  const name = localStorage.getItem("name");

  return (
    <div className={onboardingStyles.view}>
      <img src={image} alt="onbaording" />
      <h1>Nice to meet you, {name}! Here's how you play:</h1>
      <p>First, invite your friends through the sharable link below!</p>
      <div>
        <Copy copyText={`http://localhost:3002/game/${gameId}`} />
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className={onboardingStyles.view}>
      <img src={image} alt="onbaording" />
      <h1>
        Once your friends arrive, take turns picking cards and asking the
        questions on them.
      </h1>
      <p>
        Use this time switched off from work to get to know your colleagues as
        more than just your coworkers.
      </p>
    </div>
  );
};

const Card3 = ({gameId}) => {
  return (
    <div className={onboardingStyles.view}>
      <img src={image} alt="onbaording" />
      <h1>When you all feel recharged and connected, you can exit the game.</h1>
      <p>
        Return to your work refreshed and more bonded than ever. (And don't
        worry! We'll always be here when you want to unplug again.)
      </p>
      <hr />
      <Link to={`/game/${gameId}`}>
        <button className={onboardingStyles.readyButton}> I'm ready!</button>
      </Link>
    </div>
  );
};

export default Onboarding;
