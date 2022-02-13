import { useState, useRef } from "react";
import beach from "../../assets/gifs/ocean-waves.gif";
import oceanWaves from "../../assets/audio/DeepDiive_Water_Sounds.mp3";
import speakerIcon from "../../assets/speaker.svg";
import muteIcon from "../../assets/mute.svg";
import ruleStyles from "./WaitingRoom.module.css";
import GroundRules from "../GroundRules/GroundRules";

const WaitingRoom = ({ hide, gameContinue }) => {
  const audio = useRef(null);
  const [mute, setMute] = useState(speakerIcon);
  const [showRules, setShowRules] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true)

  const hideGroundRules = () => {
    setShowRules(true);
  };

  // const show = () => {
  //   setShowWaiting(true)
  // }

  const muteAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setMute(audio.current.paused ? muteIcon : speakerIcon);
  };

  return (
    <div>
      {showRules ? (
        <GroundRules hideGroundRules={hideGroundRules} setShowWaiting={setShowWaiting} />
      ) : showWaiting ? (
    <div className={ruleStyles.modal}>
      <p>
        Press <span>continue</span> when <br /> everyone has arrived.
      </p>
      <img src={beach} alt="beach waves" />
      {gameContinue ? (
        <button onClick={hide} className={ruleStyles.continueBtn}>
          continue
        </button>
      ): null }
      <button className={ruleStyles.muteBtn} onClick={muteAudio}>
        <img src={mute} alt="mute button" />
      </button>
      <audio ref={audio} autoPlay loop>
        <source src={oceanWaves} type="audio/mpeg" />
      </audio>
    </div>
   ) : null}
    </div>
  );
};

export default WaitingRoom;
