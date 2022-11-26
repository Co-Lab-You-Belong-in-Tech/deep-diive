import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import GroundRules from "../GroundRules/GroundRules";
import pickStyles from "./PickCard.module.css";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";

const PickCard = ({ hideModal, gameContinue, isGameHost }) => {
  const [showStart, setShowStart] = useState(true);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const hideRules = () => {
    setShowStart(false);
  };
  const pickACard = () => {
    navigate(`/game/${gameId}`);
  };
  return (
    <FadeIn>
      {showStart ? (
        <GroundRules
          hideRules={hideRules}
          gameContinue={gameContinue}
          isGameHost={isGameHost}
        />
      ) : (
        <div className={pickStyles.pickCard}>
          <button onClick={pickACard}>pick a card</button>
          <img src={DEEPDIIVE_IMAGES.playCard} alt="deck of cards" />
        </div>
      )}
    </FadeIn>
  );
};

export default PickCard;
