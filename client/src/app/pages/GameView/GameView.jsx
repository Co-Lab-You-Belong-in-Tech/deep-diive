import { useState, useEffect } from "react";
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
import ExitModal from "../../components/ExitModal/ExitModal";
import * as gameEvents from "../../helpers/events";

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
  const [guest, setGuest] = useState("");
  const [isGameHost, setIsGameHost] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  // setGameContinue(true);
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const getGameUsers = async () => {
      const { data } = await deepdiiveApi.get(
        `/links/users/${gameId}`
      );
      console.log(data.player[1]);
      console.log(gameId);
      setHost(data.player[0]);
      setGuest(data.player[1])
      // setIsGuest(data.player[1])
      setIsGameHost(userIsGameHost(data.player[0]))
      // setIsGuest(userIsGuest(data.player[1]))

      const gameHost = userIsGameHost(data.player[0]);
      const gameGuest = userIsGuest(data.player[1]);

      console.log(gameHost);
      console.log(gameGuest)

      if (!gameHost && !gameGuest) {
        navigate(`/v1/onboarding/invite/${gameId}`);
        console.log("not host")
      } 

      console.log("listening to game end")

      // shows modal when other player has ended game
      gameEvents.onGameEnd(() => {
        console.log("received game end")
        setShowExitModal(true);
      })
      // return data;
    };
    getGameUsers();
  }, [gameId, isGameHost, navigate]);

  // ends game
  const endGame = () => {
    console.log("game ended")
    gameEvents.endGame(gameId);
  }


    // const end = useCallback(() => {
    //   gameEvents.onGameEnd(gameId);
    // }, [gameId])

    // useEffect(() => {
    //   if(end){
    //     gameEvents.onDisconnect(gameId, () => {
    //       setGameEnd("game over");
    //     });
    //   }
    // }, [gameId, end])

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
          {/* <button>no</button> */}
          <button onClick={closeModal}>no</button>
          <Link to="/v1/feedback">
            <button className={gameStyles.yes} onClick={endGame}>yes</button>
          </Link>
        </div>
      </Modal>
      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar openModal={openModal} />
        </div>
        { showExitModal && (
          <div className={gameStyles.overlay}>
            <div className={gameStyles.ended}><ExitModal /></div>
          </div>
        )}
        {/* <div className={gameStyles.test}>
          <div className={gameStyles.ended}><ExitModal /></div>
        </div> */}
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
