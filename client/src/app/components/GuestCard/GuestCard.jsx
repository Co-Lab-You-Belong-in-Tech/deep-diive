import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cardStyles from "./GuestCard.module.css";
import FadeIn from "react-fade-in";
import * as gameEvents from "../../helpers/events";

const Card = (isGameHost) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [questions, setQuestions] = useState([]);
  const {gameId} = useParams();

  useEffect(() => {
    gameEvents.startGuestGame(gameId);
    gameEvents.onNewQuestion((questionData) => {
        setQuestionNum(questionData.questionNumber);
        setQuestions(questionData.question)
    })
  }, []);

  if(!questions) return null;

  return (
    <FadeIn>
      <FadeIn>
        <div className={cardStyles.card}>
            <div className={cardStyles.cardContent}>
              <div className={cardStyles.cardHeader}>
                <p className={cardStyles.questionNumber}>
                  Question {questionNum}
                </p>
              </div>
              <div className={cardStyles.question}>
                <p>{questions}</p>
              </div>
            </div>
        </div>
        <p className={cardStyles.decide}>
          Decide who goes first and take turns answering each question. 🎉{" "}
        </p>
      </FadeIn>
      {/* )} */}
      {/* {!isVisible && */}
      {/* <div {...fadeProps} className={cardStyles.card}> */}
      {/* } */}
    </FadeIn>
  );
};

export default Card;
