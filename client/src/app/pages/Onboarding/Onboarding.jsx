import { useState, useEffect } from "react";
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
import Navbar from '../../components/Navbar/Navbar';

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
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(`http://localhost:8080/links`);
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
      <div className={onboardingStyles.navDiv}>
        <Navbar openModal={openModal} />
      </div>

      <div className={onboardingStyles.slide}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
          infinite={false}
          edgeFriction={0}
        >
          <Card1 gameId={gameId} />
          <Card2 gameId={gameId}/>

        </Slider>
      </div>

    </div>
  );
};

//Each slide
const Card1 = ({gameId}) => {
  const name = localStorage.getItem("name");

  return (
    <div className={onboardingStyles.view}>
      <h1>Nice to meet you, {name}! Time to invite your friends</h1>
      <p>Copy the sharable link below and share through your favorite video conference app!</p>
      <div className={onboardingStyles.copybutton}>
        <Copy copyText={`http://localhost:3002/game/${gameId}`} />
      </div>
      <img style={{right:"0", position:"absolute"}} src={wave} alt="wave"/>
    </div>
  );
};

const Card2 = ({gameId}) => {
  return (
    <div className={onboardingStyles.view}>
      <h1>
        Is this your first time <br/> taking a DeepDiive?
      </h1>
      <div className={onboardingStyles.yesnobutton}>
        <Link to={`/game/${gameId}`}>
          <button className={onboardingStyles.no}> NO </button>
        </Link>
        <Link to="/instruction">
          <button className={onboardingStyles.yes}> YES </button>
        </Link>
      </div>
      <img style={{left:"0", position:"absolute"}} src={image} alt="wave"/>
    </div>
  );
};


export default Onboarding;
