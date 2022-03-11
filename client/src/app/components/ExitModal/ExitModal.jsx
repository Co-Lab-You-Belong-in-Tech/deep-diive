import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Modal from "react-modal";
import exitStyles from "./ExitModal.module.css";

const ExitModal = () => {
    const { closeModal, modalIsOpen } = useContext(GlobalContext);
    
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Exit Modal"
                closeTimeoutMS={300}
                className={exitStyles.reactModal}
                overlayClassName={exitStyles.ModalOverlay}
            >
                <p className={exitStyles.modalText}>Are you sure you want to exit?</p>
                <div className={exitStyles.modalButtons}>
                <button onClick={closeModal}>no</button>
                <Link to="/feedback">
                    <button className={exitStyles.yes}>yes</button>
                </Link>
                </div>
            </Modal>
        </div>
    )
}

export default ExitModal