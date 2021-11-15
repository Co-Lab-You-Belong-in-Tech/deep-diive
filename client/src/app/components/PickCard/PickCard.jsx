import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FadeIn from "react-fade-in";
import Modal from "../Modal/Modal";
import cardImg from "../../assets/play-card.png";
import pickStyles from "./PickCard.module.css";

const PickCard = ({ hideModal }) => {
  const [showStart, setShowStart] = useState(true);
  const { gameId } = useParams();

  const hideRules = () => {
    setShowStart(false);
  };
  return (
    <FadeIn>
      {showStart ? (
        <Modal hideRules={hideRules} />
      ) : (
        <div className={pickStyles.pickCard}>
          <img src={cardImg} alt="deck of cards" />
          {/* <button onClick={hideModal}>pick a card</button> */}
          <Link to={`/v1/game/${gameId}`}>
            <button>pick a card</button>
          </Link>
        </div>
      )}
    </FadeIn>
  );
};

export default PickCard;
