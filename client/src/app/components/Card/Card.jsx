import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import cardStyles from "./Card.module.css";
import FadeIn from "react-fade-in";
import deepdiiveApi from "../../api/deepdiiveApi";
import * as gameEvents from "../../helpers/events";

const Card = () => {
  const [step, setStep] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);
  const [questionsArray, setQuestionsArray] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    // get the questions and shuffle them
    const getQuestions = () => {
      gameEvents.startHostGame(gameId)
      gameEvents.onGameStart(async () => {
        const { data } = await deepdiiveApi.get(`/questions`);
        const questions = data.sort((a, b) => 0.5 - Math.random());
        setQuestionsArray(questions);
        gameEvents.sendQuestion({
          game_id: gameId,
          question: {
            ...questions[0],
            questionNumber: 1
          }
        });
      })
    };
    getQuestions();
  }, [gameId]);

  const goToNext = () => {
    const questionNumber = questionNum + 1
    const question = questionsArray[questionNumber - 1]
    setStep(step + 1);
    setQuestionNum(questionNumber);
    gameEvents.sendQuestion({
      game_id: gameId,
      question: {
        ...question,
        questionNumber 
      }
    })
  };
  const goBack = () => {
    const questionNumber = questionNum - 1
    const question = questionsArray[questionNumber - 1]
    setStep(step - 1);
    setQuestionNum(questionNumber);
    gameEvents.sendQuestion({
      game_id: gameId,
      question: {
        ...question,
        questionNumber 
      }
    })
  };

  return (
    <FadeIn>
      <FadeIn>
        <div className={cardStyles.card}>
          {questionsArray.slice(step - 1, step).map((step, index) => (
            <div className={cardStyles.cardContent} key={index}>
              <div className={cardStyles.cardHeader}>
                <p className={cardStyles.questionNumber}>
                  Question {questionNum}
                </p>
              </div>
              <div className={cardStyles.question}>
                <p>{step.question}</p>
              </div>
            </div>
          ))}
          <div className={cardStyles.buttons}>
            {step > 1 ? (
              <button onClick={goBack}>back</button>
            ) : (
              <button className={cardStyles.hidden}>back</button>
            )}
            {step < questionsArray.length && (
              <button onClick={goToNext} className={cardStyles.next}>
                next card
              </button>
            )}
          </div>
        </div>
        <p className={cardStyles.decide}>
          Decide who goes first and take turns answering each question. 🎉{" "}
        </p>
      </FadeIn>
    </FadeIn>
  );
};

export default Card;
