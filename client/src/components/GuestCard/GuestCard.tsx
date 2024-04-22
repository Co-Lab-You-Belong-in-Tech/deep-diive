import { useState, useEffect, useRef } from "react";
import { useParams } from 'next/navigation';
import cardStyles from "./GuestCard.module.css";
import FadeIn from "react-fade-in";
import * as gameEvents from "../../helpers/events";
import {gsap} from "gsap";

const Card = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const [questions, setQuestions] = useState([]);
  const {gameId} = useParams();

  const boxRef = useRef(null);

  useEffect(() => {
    gameEvents.startGuestGame(gameId);
    gameEvents.onNewQuestion((questionData: any) => {
        setQuestionNum(questionData.questionNumber);
        setQuestions(questionData.question)
          gsap.fromTo(boxRef.current, 1, {
            opacity: 0,
          }, {opacity: 1, duration: 1});
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  if(!questions) return null;

  return (
    <FadeIn>
      <FadeIn>
        <div className={cardStyles.card} ref={boxRef}>
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
          Decide who goes first and take turns answering each question. 🎉
        </p>
      </FadeIn>
    </FadeIn>
  );
};

export default Card;
