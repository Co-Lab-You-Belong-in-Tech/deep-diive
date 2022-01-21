import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import Modal from "../Modal/Modal";
import cardImg from "../../assets/play-card.png";
import pickStyles from "./PickCard.module.css";

const PickCard = ({ hideModal, gameContinue, isGameHost }) => {
  const [showStart, setShowStart] = useState(true);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const hideRules = () => {
    setShowStart(false);
  };
  const pickACard = () => {
    navigate(`/v1/game/${gameId}`);
  }
  return (
    <FadeIn>
      {showStart ? (
        <Modal hideRules={hideRules} gameContinue={gameContinue} isGameHost={isGameHost}/>
      ) : (
        <div className={pickStyles.pickCard}>
          <img src={cardImg} alt="deck of cards" />
          {/* <button onClick={hideModal}>pick a card</button> */}
          {/* <Link to={`/v1/game/${gameId}`}> */}
            <button onClick={pickACard} >pick a card</button>
          {/* </Link> */}
        </div>
      )}
    </FadeIn>
  );
};

export default PickCard;
