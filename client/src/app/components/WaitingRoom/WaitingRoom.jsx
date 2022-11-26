import { useState, useRef } from "react";
import oceanWaves from "../../assets/audio/CHILL-WAITING-ROOM-MUSIC.mp3";
import ruleStyles from "./WaitingRoom.module.css";
import GroundRules from "../GroundRules/GroundRules";
import PopUpAlert from "../PopUpAlert/PopUpAlert";
import { SpeakerIcon, MuteIcon } from "../../assets/svgs";
import { DEEPDIIVE_GIFS } from "../../constants/gallery";

const WaitingRoom = ({ hide, gameContinue }) => {
  const audio = useRef(null);
  const [icon, setIcon] = useState(<SpeakerIcon />);
  const [showRules, setShowRules] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [alert, setAlert] = useState(false);

  const hideGroundRules = () => {
    setShowRules(true);
  };

  const muteAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setIcon(audio.current.paused ? <MuteIcon /> : <SpeakerIcon />)
    
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
          <img src={DEEPDIIVE_GIFS.oceanWaves} alt="ocean waves" />
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
            {icon}
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
