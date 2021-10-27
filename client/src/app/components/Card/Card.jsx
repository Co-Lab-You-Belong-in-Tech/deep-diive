import { useState } from "react";
import Modal from "../Modal/Modal";
// import useFade from "../../hooks/useFade";
import data from "../../data/data.json";
import cardStyles from "./Card.module.css";
import FadeIn from 'react-fade-in';

const Card = () => {
    const [showCards, setShowCards] = useState(true);
    const [step, setStep] = useState(1);
    // const [isVisible, setVisible, fadeProps] = useFade();

    const hideModal = () => {
        setShowCards(false);
    }
    const goToNext = () => {
        setStep(step + 1);
        // setVisible(isVisible);
    }
    const goBack = () => {
        setStep(step - 1)
    }

    return (
        <FadeIn>
            {showCards ?
                (<Modal hideModal={hideModal} />)
                :
                (<FadeIn>
                    <div className={cardStyles.card}>
                    {data.sort((a,b) => 0.5 - Math.random()).slice(step - 1, step).map((step, index) => (
                        <div className={cardStyles.cardContent} key={index}>
                            <div className={cardStyles.cardHeader}>
                                <p className={cardStyles.questionNumber}>Question {step.id}</p>
                            </div>
                            <div className={cardStyles.question}>
                                <p>{step.question}</p>
                            </div>
                        </div>
                    ))}
                    <div className={cardStyles.buttons}>
                        {step > 1 ? (
                            <button onClick={goBack}>back</button>
                        ) : <button className={cardStyles.hidden}>back</button>}
                        {step < data.length && (
                            <button onClick={goToNext} className={cardStyles.next}>next card</button>
                        )}
                    </div>
                    </div>
                    </FadeIn>
                    )
            }
            {/* {!isVisible && */}
                {/* <div {...fadeProps} className={cardStyles.card}> */}
            {/* } */}
        </ FadeIn>
    )
}

export default Card