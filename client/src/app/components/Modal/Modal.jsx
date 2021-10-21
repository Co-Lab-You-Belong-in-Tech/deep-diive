import modalStyles from "./Modal.module.css";
import { Link } from 'react-router-dom';

const Modal = ({ hideModal}) => {
    return (
        <div className={modalStyles.modal}>
            <p>Are you ready to begin?</p>
            <div className={modalStyles.modalButtons}>
            <Link to="/onboarding">
                <button className={modalStyles.backButton}>back</button>
            </Link>
                <button onClick={hideModal}>yes!</button>
            </div>
        </div>
    )
}

export default Modal
