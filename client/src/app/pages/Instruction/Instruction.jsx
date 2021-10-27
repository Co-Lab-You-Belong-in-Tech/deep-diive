import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Instruction.css";
import image from "../../assets/beach.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import instructionStyles from "./Instruction.module.css";
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

//Slide show
const Instruction = () => {
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
const Card1 = ({gameId}) => {
  return (
    <div className={instructionStyles.view}>
        <img src={image} alt="image"/>
        <h1>Once your friends arrive, press <br/>
            <span> Start</span> and we will select the player that goes first
        </h1>
        <div >
            <Link to={`/game/${gameId}`}>
                <button className={instructionStyles.skipbutton}> Skip </button>
            </Link>
        </div>
    </div>
  );
};

const Card2 = ({gameId}) => {
  return (
    <div className={instructionStyles.view}>
        <img src={image} alt="image"/>
        <h1>Once you all are done answering the question, 
            you can pick a new one by pressing  
            <span> Next Card. </span> 
        </h1>

        <div >
            <Link to={`/game/${gameId}`}>
                <button className={instructionStyles.skipbutton}> Skip </button>
            </Link>
        </div>
    </div>
  );
};

const Card3 = ({gameId}) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image} alt="image"/>
        <h1>If you don’t like a question or it makes you feel uncomfortable,
             you can also click 
            <span> Next Card.</span> 
        </h1>
        <h2> All players can see cards change live but should not question 
            why <br/> someone chooses to skip. </h2>

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
        <img src={image} alt="image"/>
          <h1>If you want to go back to a previous card, click the 
              <span> left arrow. </span> 
          </h1>
          <div >
              <Link to={`/game/${gameId}`}>
                  <button className={instructionStyles.skipbutton}> Skip </button>
              </Link>
          </div>
      </div>
    );
  };

const Card5 = ({gameId}) => {
  return (
    <div className={instructionStyles.view}>
      <img src={image} alt="image" />
      <h1>When you are done playing, simply press the 
          <span> X </span> at the top right of your screen.
      </h1>
      <hr />
      <Link to={`/game/${gameId}`}>
        <button className={instructionStyles.readyButton}>START</button>
      </Link>
    </div>
  );
};

export default Instruction;
