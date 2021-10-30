import { useState, useEffect } from "react";
import PickCard from "../PickCard/PickCard";
// import useFade from "../../hooks/useFade";
import data from "../../data/data.json";
import cardStyles from "./Card.module.css";
import FadeIn from "react-fade-in";

const Card = () => {
  const [showCards, setShowCards] = useState(true);
  const [step, setStep] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);
  const [questionsArray, setQuestionsArray] = useState([]);
  // const [isVisible, setVisible, fadeProps] = useFade();

  useEffect(() => {
    const questions = data.sort((a, b) => 0.5 - Math.random());
    setQuestionsArray(questions);
  }, []);

  const hideModal = () => {
    setShowCards(false);
  };
  const goToNext = () => {
    setStep(step + 1);
    setQuestionNum(questionNum + 1);
    // setVisible(isVisible);
  };
  const goBack = () => {
    setStep(step - 1);
    setQuestionNum(questionNum - 1);
  };

  return (
    <FadeIn>
      {showCards ? (
        <PickCard hideModal={hideModal} />
      ) : (
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
              {step < data.length && (
                <button onClick={goToNext} className={cardStyles.next}>
                  next card
                </button>
              )}
            </div>
          </div>
        </FadeIn>
      )}
      {/* {!isVisible && */}
      {/* <div {...fadeProps} className={cardStyles.card}> */}
      {/* } */}
    </FadeIn>
  );
};

export default Card;
