import beach from "../../assets/gifs/beach-waves-2.gif";
import oceanWaves from "../../assets/audio/ocean-wave-2.mp3";
import ruleStyles from "./Rules.module.css";

const Rules = ({hide}) => {
    return (
        <div className={ruleStyles.modal}>
                    <p>Press <span>start</span> when <br /> everyone has arrived.</p>
                    <img src={beach} alt="" />
<<<<<<< HEAD
                    <button onClick={hide}>continue</button>
=======
                    <button onClick={hide}>start</button>
>>>>>>> 14bec70c4cfb9a873b9fb84c16d4e749626d738f
                    <audio autoPlay loop >
                        <source src={oceanWaves} type="audio/mpeg" />
                    </audio>
                </div>
    )
}

export default Rules;
