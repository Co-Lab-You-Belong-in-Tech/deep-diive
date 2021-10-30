import { useState } from "react";
import FadeIn from "react-fade-in";
import Modal from "../Modal/Modal";
import cardImg from "../../assets/play-card.png";
import pickStyles from "./PickCard.module.css";

const PickCard = ({ hideModal }) => {
  const [showStart, setShowStart] = useState(true);

  const hideRules = () => {
    setShowStart(false);
  };
  return (
    <FadeIn>
      {showStart ? (
        <Modal hideRules={hideRules} />
      ) : (
        <div className={pickStyles.pickCard}>
          <img src={cardImg} alt="" />
          <button onClick={hideModal}>pick a card</button>
        </div>
      )}
    </FadeIn>
  );
};

export default PickCard;
