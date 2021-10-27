import beach from "../../assets/gifs/beach-waves-2.gif";
import oceanWaves from "../../assets/audio/ocean-wave-2.mp3";
import modalStyles from "./Modal.module.css";

const Modal = ({ hideModal }) => {
    return (
        <div className={modalStyles.modal}>
            <p>Press <span>start</span> when <br /> everyone has arrived.</p>
            <img src={beach} alt="" />
            <button onClick={hideModal}>start</button>
            <audio autoPlay loop >
                <source src={oceanWaves} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Modal
