import React from "react";
import InstructionCardStyles from "./instructionCard.module.css";
import { Link } from "react-router-dom";

const InstructionCard = ({ gameId, gif, buttonText, text, subText }) => {
  return (
    <div className={InstructionCardStyles.view}>
      <img src={gif} alt="start instruction" />
      {text}
      <h2>{subText}</h2>
      <div>
        <Link to={`/start/${gameId}`}>
          <button
            className={
              buttonText === "continue"
                ? InstructionCardStyles.readyButton
                : InstructionCardStyles.skipbutton
            }
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InstructionCard;
