import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../../components/Navbar_white/Navbar";
import PickCard from "../../components/PickCard/PickCard";
import Players from "../../components/Players/Players";
import gameStyles from "./GameStart.module.css";
import deepdiiveApi from "../../api/deepdiiveApi";
import * as gameEvents from "../../helpers/events";
import {userIsGameHost} from "../../helpers/utils";

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

const GameStart = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [host, setHost] = useState("");
  const [guest, setGuest] = useState("");
  const [isGameHost, setIsGameHost] = useState(false);
  const [gameContinue, setGameContinue] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    gameEvents.connect(gameId, () => {
      setGameContinue(true);
    });
  }, [gameId])

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

      const isHost = userIsGameHost(data.player[0]);
      setIsGameHost(isHost);

      // if user is the host, navigate to game
      if(!isHost){
        gameEvents.onGuestGameStart(() => {
          navigate(`/game/${gameId}`);
        });
      }
      return data;
    };
    getGameUsers();
  }, [gameId, navigate]);

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
            <PickCard gameContinue={gameContinue} isGameHost={isGameHost}/>
          </div>
        <div className={gameStyles.playerDiv}>
          <Players host={host} guest={guest} />
        </div>
      </div>
    </div>
  );
};

export default GameStart;
