import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import GroundRules from "../GroundRules/GroundRules";
import cardImg from "../../assets/play-card.png";
import pickStyles from "./PickCard.module.css";
import Image from "next/image";

const PickCard = ({ hideModal, gameContinue, isGameHost }: any) => {
  const [showStart, setShowStart] = useState(true);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const hideRules = () => {
    setShowStart(false);
  };
  const pickACard = () => {
    navigate(`/game/${gameId}`);
  }
  return (
    <FadeIn>
      {showStart ? (
        <GroundRules hideRules={hideRules} gameContinue={gameContinue} isGameHost={isGameHost}/>
      ) : (
        <div className={pickStyles.pickCard}>
          <Image src={cardImg} alt="deck of cards" />
            <button onClick={pickACard} >pick a card</button>
        </div>
      )}
    </FadeIn>
  );
};

export default PickCard;
