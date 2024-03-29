import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Instruction.css";
import image3 from "../../assets/gifs/onboard3.gif";
import image4 from "../../assets/gifs/onboard4.gif";
import image5 from "../../assets/gifs/onboard5.gif";
import image6 from "../../assets/gifs/onboard6.gif";
import image7 from "../../assets/gifs/onboard7.gif";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import instructionStyles from "./Instruction.module.css";
import Navbar from "../../components/Navbar/Navbar";
import ExitModal from "../../components/ExitModal/ExitModal";
import logo from "../../assets/logo-blue.svg";
import { GlobalContext } from "../../context/GlobalState";
import { motion } from "framer-motion";

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

//Slide show
const Instruction = () => {
  const { modalIsOpen } = useContext(GlobalContext);
  const { gameId } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      {modalIsOpen && <ExitModal />}
      <div className={instructionStyles.navDiv}>
        <Navbar logo={logo}/>
      </div>

      <div className={instructionStyles.slide}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
          infinite={false}
          edgeFriction={0}
          direction={"right"}
        >
          <Card1 gameId={gameId} />
          <Card2 gameId={gameId} />
          <Card3 gameId={gameId} />
          <Card4 gameId={gameId} />
          <Card5 gameId={gameId} />
        </Slider>
      </div>
    </div>
    </motion.div>
  );
};

//Each slide
const Card1 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image3} alt="start instruction" />
      <h1>
        Once your workmate arrives, <br /> the host will press{" "}
        <span className={instructionStyles.highlight}>Start</span> and everyone will
        select the player that answers first.
      </h1>
      <div>
        <Link to={`/start/${gameId}`}>
          <button className={instructionStyles.skipbutton}> Skip </button>
        </Link>
      </div>
    </div>
  );
};

const Card2 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image4} alt="next card instruction" />
      <h1>
        Once you all are done answering the question, the host picks a new one by
        pressing <span className={instructionStyles.highlight}>Next Card.</span>
      </h1>

      <div>
        <Link to={`/start/${gameId}`}>
          <button className={instructionStyles.skipbutton}> Skip </button>
        </Link>
      </div>
    </div>
  );
};

const Card3 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img
        style={{ width: "477px", height: "200px" }}
        src={image5}
        alt="gif five"
      />
      <h1>
        If you don’t like a question or it makes you feel uncomfortable, the host can
        also click
        <span className={instructionStyles.highlight}> Next Card.</span>
      </h1>
      <h2>
        {" "}
        All players can see cards change live but should not question why
        someone chooses to skip.{" "}
      </h2>

      <div>
        <Link to={`/start/${gameId}`}>
          <button className={instructionStyles.skipbutton}> Skip </button>
        </Link>
      </div>
    </div>
  );
};

const Card4 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image6} alt="back button instruction" />
      <h1>
        Take turns alternating who answers a question. If you want to go back to
        a previous card, the host can click{" "}
        <span className={instructionStyles.highlight}>Back.</span>
      </h1>
      <div>
        <Link to={`/start/${gameId}`}>
          <button className={instructionStyles.skipbutton}> Skip </button>
        </Link>
      </div>
    </div>
  );
};

const Card5 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img style={{ marginTop: "-35px" }} src={image7} alt="exit instruction" />
      <h1>
        When you are done playing, simply press the{" "}
        <span className={instructionStyles.highlight}>X</span> at the top right
        of your screen.
      </h1>
      <hr />
      <Link to={`/start/${gameId}`}>
        <button className={instructionStyles.readyButton}>CONTINUE</button>
      </Link>
    </div>
  );
};

export default Instruction;
