import { useState, useEffect } from "react";
// import PickCard from "../PickCard/PickCard";
// import useFade from "../../hooks/useFade";
import cardStyles from "./Card.module.css";
import FadeIn from "react-fade-in";
import deepdiiveApi from "../../api/deepdiiveApi";

const Card = () => {
  // const [showCards, setShowCards] = useState(true);
  const [step, setStep] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);
  const [questionsArray, setQuestionsArray] = useState([]);
  // const [isVisible, setVisible, fadeProps] = useFade();

  useEffect(() => {
    const res = async () => {
      const { data } = await deepdiiveApi.get(
        `/questions`
      );
      console.log(data);
      const questions = data.sort((a, b) => 0.5 - Math.random());
      setQuestionsArray(questions);
      return questions;
    };
    res();
  }, []);

  // const hideModal = () => {
  //   setShowCards(false);
  // };
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
      {/* {showCards ? (
        <PickCard hideModal={hideModal} />
      ) : ( */}
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
      {/* )} */}
      {/* {!isVisible && */}
      {/* <div {...fadeProps} className={cardStyles.card}> */}
      {/* } */}
    </FadeIn>
  );
};

export default Card;
