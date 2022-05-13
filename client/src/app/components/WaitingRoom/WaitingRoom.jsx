import { useState, useRef } from "react";
import beach from "../../assets/gifs/ocean-waves.gif";
import oceanWaves from "../../assets/audio/CHILL-WAITING-ROOM-MUSIC.mp3";
import speakerIcon from "../../assets/speaker.svg";
import muteIcon from "../../assets/mute.svg";
import ruleStyles from "./WaitingRoom.module.css";
import GroundRules from "../GroundRules/GroundRules";
import PopUpAlert from "../PopUpAlert/PopUpAlert";

const WaitingRoom = ({ hide, gameContinue }) => {
  const audio = useRef(null);
  const [mute, setMute] = useState(speakerIcon);
  const [showRules, setShowRules] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [alert, setAlert] = useState(false);

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

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div>
      {showRules ? (
        <GroundRules
          hideGroundRules={hideGroundRules}
          setShowWaiting={setShowWaiting}
        />
      ) : showWaiting ? (
        <div className={ruleStyles.modal}>
          <p>
            Once your workmate arrives, <br /> you can <span>continue</span>.
          </p>
          <img src={beach} alt="beach waves" />
          {gameContinue ? (
            <button onClick={hide} className={ruleStyles.continueBtn}>
              continue
            </button>
          ) : (
            <button onClick={showAlert} className={ruleStyles.disabledBtn}>
              continue
            </button>
          )}
          {alert && (
            <PopUpAlert message="Waiting on your workmate to arrive!" />
          )}
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
