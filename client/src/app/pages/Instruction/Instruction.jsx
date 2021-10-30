import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import axios from "axios";
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

//Slide show
const Instruction = () => {
  const [gameId, setGameId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <p className={instructionStyles.modalText}>Are you sure you want to exit?</p>
        <div className={instructionStyles.modalButtons}>
          <button className={instructionStyles.no} onClick={closeModal}>NO</button>
          <Link to="/feedback">
            <button className={instructionStyles.yes}>YES</button>
          </Link>
        </div>
      </Modal>

      <div className={instructionStyles.navDiv}>
        <Navbar openModal={openModal} />
      </div>

      <div className={instructionStyles.slide}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
          infinite={false}
          edgeFriction={0}
        >
          <Card1 gameId={gameId} />
          <Card2 gameId={gameId} />
          <Card3 gameId={gameId} />
          <Card4 gameId={gameId} />
          <Card5 gameId={gameId} />
        </Slider>
      </div>
    </div>
  );
};

//Each slide
const Card1 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
        <img src={image3} alt="image"/>
        <h1>Once your workmate arrives, <br/> press {" "}  
            <span className={instructionStyles.highlight}>Start</span> 
            {" "} and we will select the player that answers first.
        </h1>
        <div >
            <Link to={`/game/${gameId}`}>
                <button className={instructionStyles.skipbutton}> Skip </button>
            </Link>
        </div>
    </div>
  );
};

const Card2 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
        <img src={image4} alt="image"/>
        <h1>Once you all are done answering the question, 
            you can pick a new one by pressing {" "}
            <span className={instructionStyles.highlight}>Next Card.</span> 
        </h1>

      <div>
        <Link to={`/game/${gameId}`}>
          <button className={instructionStyles.skipbutton}> Skip </button>
        </Link>
      </div>
    </div>
  );
};

const Card3 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img style={{width:"477px", height:"200px"}} src={image5} alt="image"/>
        <h1>If you don’t like a question or it makes you feel uncomfortable,
             you can also click 
            <span className={instructionStyles.highlight}> Next Card.</span> 
        </h1>
        <h2> All players can see cards change live but should not question 
            why someone chooses to skip. </h2>

        <div >
            <Link to={`/game/${gameId}`}>
                <button className={instructionStyles.skipbutton}> Skip </button>
            </Link>
        </div>
    </div>
  );
};

const Card4 = ({gameId}) => {
  return (
      <div className={instructionStyles.view}>
        <img src={image6} alt="image"/>
          <h1>Take turns alternating who answers a question. 
            If you want to go back to a previous card, click {" "}
              <span className={instructionStyles.highlight}>Back.</span> 
          </h1>
          <div >
              <Link to={`/game/${gameId}`}>
                  <button className={instructionStyles.skipbutton}> Skip </button>
              </Link>
          </div>
      </div>
  );
};

const Card5 = ({ gameId }) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image7} alt="image" />
      <h1>When you are done playing, simply press the {" "}
          <span className={instructionStyles.highlight}>X</span> {" "}at the top right of your screen.
      </h1>
      <hr />
      <Link to={`/game/${gameId}`}>
        <button className={instructionStyles.readyButton}>CONTINUE</button>
      </Link>
    </div>
  );
};

export default Instruction;
