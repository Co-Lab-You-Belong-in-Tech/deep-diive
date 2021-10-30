import { useState, useRef } from "react";
import beach from "../../assets/gifs/ocean-waves.gif";
import oceanWaves from "../../assets/audio/DeepDiive_Water_Sounds.mp3";
import speakerIcon from "../../assets/speaker.svg";
import muteIcon from "../../assets/mute.svg";
import ruleStyles from "./Rules.module.css";

const Rules = ({ hide }) => {
  const audio = useRef(null);
  const [mute, setMute] = useState(speakerIcon);

  const muteAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setMute(audio.current.paused ? muteIcon : speakerIcon);
  };

  return (
    <div className={ruleStyles.modal}>
      <p>
        Press <span>continue</span> when <br /> everyone has arrived.
      </p>
      <img src={beach} alt="" />
      <button onClick={hide} className={ruleStyles.continueBtn}>
        continue
      </button>
      <button className={ruleStyles.muteBtn} onClick={muteAudio}>
        <img src={mute} alt="mute button" />
      </button>
      <audio ref={audio} autoPlay loop>
        <source src={oceanWaves} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Rules;
