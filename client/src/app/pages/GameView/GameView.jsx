import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../../components/Navbar_white/Navbar";
import Card from "../../components/Card/Card";
import GuestCard from "../../components/GuestCard/GuestCard";
import Players from "../../components/Players/Players";
import gameStyles from "./GameView.module.css";
import deepdiiveApi from "../../api/deepdiiveApi";
import {userIsGameHost, userIsGuest} from "../../helpers/utils";
// import Reactions from "../../components/Reactions/Reactions";
import ExitAlert from "../../components/ExitAlert/ExitAlert";
import * as gameEvents from "../../helpers/events";
import { GlobalContext } from "../../context/GlobalState";

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

const GameView = () => {
  const [host, setHost] = useState("");
  const [guest, setGuest] = useState("");
  const [isGameHost, setIsGameHost] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { modalIsOpen, closeModal } = useContext(GlobalContext);
  
  useEffect(() => {
    const getGameUsers = async () => {
      const { data } = await deepdiiveApi.get(
        `/links/users/${gameId}`
      );

      /* 
        set the host to be the first name in the players array,
        and the guest would be the second name
      */
      setHost(data.player[0]);
      setGuest(data.player[1])
      setIsGameHost(userIsGameHost(data.player[0]))

      const gameHost = userIsGameHost(data.player[0]);
      const gameGuest = userIsGuest(data.player[1]);

      // if the user isn't already in the game as a host or guest, redirect to onboarding
      if (!gameHost && !gameGuest) {
        navigate(`/onboarding/invite/${gameId}`);
      } 

      // shows modal when other player has ended game
      gameEvents.onGameEnd(() => {
        setShowExitModal(true);
      })
    };
    getGameUsers();
  }, [gameId, isGameHost, navigate]);

  // ends game
  const endGame = () => {
    gameEvents.endGame(gameId);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Exit Modal"
        closeTimeoutMS={300}
      >
        <p className={gameStyles.modalText}>Are you sure you want to exit?</p>
        <div className={gameStyles.modalButtons}>
          <button onClick={closeModal}>no</button>
          <Link to="/feedback">
            <button className={gameStyles.yes} onClick={endGame}>yes</button>
          </Link>
        </div>
      </Modal>
      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar />
        </div>
        { showExitModal && (
          <div className={gameStyles.overlay}>
            <div className={gameStyles.ended}><ExitAlert /></div>
          </div>
        )}
        <div className={gameStyles.cardDiv}>
          {isGameHost ? <Card /> : <GuestCard />}
        </div>
        {/* <div className={gameStyles.reactionDiv}>
          <Reactions />
        </div> */}
        <div className={gameStyles.playerDiv}>
          <Players host={host} guest={guest} />
        </div>
      </div>
    </div>
  );
};

export default GameView;
