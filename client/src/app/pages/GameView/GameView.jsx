import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../../components/Navbar_white/Navbar";
import Card from "../../components/Card/Card";
import GuestCard from "../../components/GuestCard/GuestCard";
import Players from "../../components/Players/Players";
import gameStyles from "./GameView.module.css";
import deepdiiveApi from "../../api/deepdiiveApi";
import {userIsGameHost} from "../../helpers/utils";

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
  const [isGameHost, setIsGameHost] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deepdiive_host = localStorage.getItem("deepdiive_host");
    const deepdiive_guests = localStorage.getItem("deepdiive_guests");

    if (!deepdiive_host && !deepdiive_guests) {
      navigate(`/v1/onboarding/invite/${gameId}`);
    }
  }, [navigate, gameId]);

//   if (!isGameHost) {
//     navigate(`/v1/onboarding/invite/${gameId}`);
//   }
// }, [navigate, gameId, isGameHost]);

  useEffect(() => {
    const res = async () => {
      const { data } = await deepdiiveApi.get(
        `/links/users/${gameId}`
      );
      console.log(data.player);
      console.log(gameId);
      setHost(data.player);
      setIsGameHost(userIsGameHost(data.player))
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
        ariaHideApp={false}
        contentLabel="Exit Modal"
      >
        <p className={gameStyles.modalText}>Are you sure you want to exit?</p>
        <div className={gameStyles.modalButtons}>
          <button onClick={closeModal}>no</button>
          <Link to="/v1/feedback">
            <button className={gameStyles.yes}>yes</button>
          </Link>
        </div>
      </Modal>
      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar openModal={openModal} />
        </div>
        <div className={gameStyles.cardDiv}>
          {isGameHost ? <Card /> : <GuestCard />}
        </div>
        <div className={gameStyles.playerDiv}>
          <Players host={host} />
        </div>
      </div>
    </div>
  );
};

export default GameView;
