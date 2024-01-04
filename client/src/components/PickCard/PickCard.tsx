import React, { useState } from "react";
import { useRouter, useParams } from 'next/navigation';
import FadeIn from "react-fade-in";
import GroundRules from "../GroundRules/GroundRules";
import cardImg from "../../assets/play-card.png";
import pickStyles from "./PickCard.module.css";
import Image from "next/image";

const PickCard: React.FC<any> = ({ hideModal, gameContinue, isGameHost }) => {
  const [showStart, setShowStart] = useState(true);
  const { gameId } = useParams();
  const router = useRouter();

  const hideRules = () => {
    setShowStart(false);
  };
  const pickACard = () => {
    router.push(`/game/${gameId}`);
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
