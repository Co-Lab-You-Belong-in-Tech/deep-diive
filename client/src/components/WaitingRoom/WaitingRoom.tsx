import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { DEEPDIIVE_GIFS } from "constants/gallery";
import { SpeakerIcon, MuteIcon } from "assets/svgs";
import ruleStyles from "./WaitingRoom.module.css";
import GroundRules from "../GroundRules/GroundRules";

const WaitingRoom: React.FC<any> = ({ hide, gameContinue }) => {
  const audio = useRef<any>(null);
  const [mute, setMute] = useState(<SpeakerIcon />);
  const [showRules, setShowRules] = useState(false);
  const [showWaiting, setShowWaiting] = useState(true);
  const [alert, setAlert] = useState(false);

  const hideGroundRules = () => {
    setShowRules(true);
  };

  // const show = () => {
  //   setShowWaiting(true)
  // }

  useEffect(() => {
    audio.current.play();
  }, []);

  const muteAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setMute(audio.current.paused ? <MuteIcon /> : <SpeakerIcon />);
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  if (alert) {
    toast.warning("Waiting on your workmate to arrive!", {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });
  }

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
          <Image
            src={DEEPDIIVE_GIFS.oceanWaves}
            alt="beach waves"
            width={385}
            height={217}
            className={ruleStyles.modalImage}
          />
          {gameContinue ? (
            <button onClick={hide} className={ruleStyles.continueBtn}>
              continue
            </button>
          ) : (
            <button onClick={showAlert} className={ruleStyles.disabledBtn}>
              continue
            </button>
          )}
          <button className={ruleStyles.muteBtn} onClick={muteAudio}>
            {mute}
          </button>
          <audio ref={audio} autoPlay loop>
            <source
              src="/audio/CHILL-WAITING-ROOM-MUSIC.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      ) : null}
    </div>
  );
};

export default WaitingRoom;
