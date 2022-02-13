import { useState } from "react";
import WaitingRoom from "../WaitingRoom/WaitingRoom";
import modalStyles from "./GroundRules.module.css";
import FadeIn from "react-fade-in";
// import GroundRules from "../GroundRules/GroundRules";
// import WaitingRoom from "../WaitingRoom/WaitingRoom";

const GroundRules = ({ hideRules, gameContinue, isGameHost, hideGroundRules, setShowWaiting }) => {
  const [showRules, setShowRules] = useState(true);
  // const [showGroundRules, setShowGroundRules] = useState(true);
  // const [please, setPlease] = useState(false);

  const hide = () => {
    setShowRules(false);
  };

  // const test = () => {
    // setShowGroundRules(false);
    // setPlease(true);
    // setShowWaiting(true)
    // show();
  // }

  return (
    <FadeIn>
      {showRules ? (
        <WaitingRoom hide={hide} gameContinue={gameContinue} isGameHost={isGameHost} />
      ) : (
        <div className={modalStyles.rules}>
          <h1>Ground Rules</h1>
          <p className={modalStyles.safe}>
            This is <span>a safe space to be yourself.</span> <br />
            When interacting we encourage you to:
          </p>
          <p className={modalStyles.list}>
            <span>Be</span> Respectful <br />
            <span>Be</span> Open <br />
            <span>Be</span> Kind <br />
            <span>Be</span> Curious <br />
            <span>Be</span> Non-Judgmental
          </p>
          <div className={modalStyles.buttons}>
            {/* <button onClick={test} className={modalStyles.back}>back</button> */}
            { isGameHost ? (
              <button onClick={hideRules} className={modalStyles.start}>start</button>
            ) : null}
            </div>
        </div>
      )}
    </FadeIn>
  );
};

export default GroundRules;
