import { useState } from "react";
import Rules from "../Rules/Rules";
import modalStyles from "./Modal.module.css";
import FadeIn from "react-fade-in";

const Modal = ({ hideRules }) => {
  const [showRules, setShowRules] = useState(true);

  const hide = () => {
    setShowRules(false);
  };
  return (
    <FadeIn>
      {showRules ? (
        <Rules hide={hide} />
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
            <button>back</button>
            <button onClick={hideRules}>start</button>
          </div>
        </div>
      )}
    </FadeIn>
  );
};

export default Modal;
