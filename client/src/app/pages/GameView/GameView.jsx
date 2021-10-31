import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import Modal from "react-modal";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Players from "../../components/Players/Players";
import gameStyles from "./GameView.module.css";

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

const GameView = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [host, setHost] = useState("");
  const { gameId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const deepdiive_name = localStorage.getItem("deepdiive_name");

    if (!deepdiive_name) {
      history.push("/onboarding/invite");
    }
  }, [history]);

  useEffect(() => {
    const res = async () => {
      const { data } = await axios.post(
        `https://deepdiive.herokuapp.com/api/links/join/${gameId}`
      );
      console.log(data.player);
      return data;
    };
    res();
  }, [gameId, host]);

  useEffect(() => {
    const res = async () => {
      const { data } = await axios.get(
        `https://deepdiive.herokuapp.com/api/links/users/${gameId}`
      );
      console.log(data.player);
      setHost(data.player);
      return data;
    };
    res();
  }, [gameId]);

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
        contentLabel="Exit Modal"
      >
        <p className={gameStyles.modalText}>Are you sure you want to exit?</p>
        <div className={gameStyles.modalButtons}>
          <button onClick={closeModal}>no</button>
          <Link to="/feedback">
            <button className={gameStyles.yes}>yes</button>
          </Link>
        </div>
      </Modal>
      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar openModal={openModal} />
        </div>
        <div className={gameStyles.cardDiv}>
          <Card />
        </div>
        <div className={gameStyles.playerDiv}>
          <Players host={host} />
        </div>
      </div>
    </div>
  );
};

export default GameView;
