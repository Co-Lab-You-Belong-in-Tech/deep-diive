import modalStyles from "./Modal.module.css";

const Modal = ({ hideModal}) => {
    return (
        <div className={modalStyles.modal}>
            <p>Are you ready to begin?</p>
            <div className={modalStyles.modalButtons}>
                <button>back</button>
                <button onClick={hideModal}>yes!</button>
            </div>
        </div>
    )
}

export default Modal
