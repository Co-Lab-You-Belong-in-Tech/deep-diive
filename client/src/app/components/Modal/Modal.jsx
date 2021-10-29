import beach from "../../assets/beach.png";
import modalStyles from "./Modal.module.css";

const Modal = ({ hideModal}) => {
    return (
        <div className={modalStyles.modal}>
            <p>Press <span>start</span> when <br /> everyone has arrived.</p>
            <img src={beach} alt="" />
            <button onClick={hideModal}>start</button>
        </div>
    )
}

export default Modal
