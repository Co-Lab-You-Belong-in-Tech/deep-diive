import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../../components/Navbar_blue/Navbar";
import styles from "./invitedInstructions.module.css";
import deepdiiveApi from "../../api/deepdiiveApi";

//exit pop-up modal
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "47%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    width: "743px",
    height: "325px",
    border: "1px solid #dedede",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

const InvitedInstructions = () => {
    const { gameId } = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);
  
    const username = localStorage.getItem("deepdiive_guests");
  
    useEffect(() => {
      // add name of player to the game and join
      const joinGame = async () => {
        const { data } = await deepdiiveApi.post(
          `/links/join/${gameId}`,
          { username: username }
        );
        return data;
      };
      joinGame();
    }, [gameId, username]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Exit Modal"
      >
        <p className={styles.modalText}>
          Are you sure you want to exit?
        </p>
        <div className={styles.modalButtons}>
          <button className={styles.no} onClick={closeModal}>
            NO
          </button>
          <Link to="/v1/feedback">
            <button className={styles.yes}>YES</button>
          </Link>
        </div>
      </Modal>
      <div className={styles.navDiv}>
        <Navbar openModal={openModal} />
      </div>
      <div className={styles.view}>
        <h1>
          Is this your first time <br /> taking a DeepDiive?
        </h1>

        <div className={styles.yesnobutton}>
          <div className={styles.column} style={{ right: "812px" }}>
            <Link to={`/v1/start/${gameId}`}>
              <button className={styles.no}> NO </button>
            </Link>
            <p>Continue to the game.</p>
          </div>
          <div className={styles.column} style={{ right: "512px" }}>
            <Link to={`/v1/instruction/${gameId}`}>
              <button className={styles.yes}> YES </button>
            </Link>
            <p>I want to read the instructions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitedInstructions;
