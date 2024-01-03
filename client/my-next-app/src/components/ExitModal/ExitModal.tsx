import { useRouter } from "next/navigation";
import Modal from "react-modal";
import { useToggleModalStore } from "store/modals";
import exitStyles from "./ExitModal.module.css";

const ExitModal = () => {
  const router = useRouter();
  const { modalIsOpen, closeModal } = useToggleModalStore();

  const goToFeedback = () => {
    closeModal();
    router.push("/feedback");
  };

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
        <div className={exitStyles.modalContent}>
          <p className={exitStyles.modalText}>Are you sure you want to exit?</p>
          <div className={exitStyles.modalButtons}>
            <button onClick={closeModal}>no</button>
            <button className={exitStyles.yes} onClick={goToFeedback}>
              yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ExitModal;
