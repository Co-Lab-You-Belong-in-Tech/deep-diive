import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar_blue/Navbar";
import styles from "./invitedInstructions.module.css";
import deepdiiveApi from "../../api/deepdiiveApi";
import ExitModal from "../../components/ExitModal/ExitModal";
import { GlobalContext } from "../../context/GlobalState";
import { motion } from "framer-motion";
import * as gameEvents from "../../helpers/events";

const InvitedInstructions = () => {
  const { modalIsOpen } = useContext(GlobalContext);
    const { gameId } = useParams();
  
    const username = localStorage.getItem("deepdiive_guests");

    useEffect(() => {
      gameEvents.guestJoin(gameId);
        gameEvents.onGuestJoinGame(() => {
          console.log("hey")
        })
    }, [gameId])
  
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
      
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameId, username]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      {modalIsOpen && <ExitModal />}
      <div className={styles.navDiv}>
        <Navbar />
      </div>
      <div className={styles.view}>
        <h1>
          Is this your first time <br /> taking a DeepDiive?
        </h1>

        <div className={styles.yesnobutton}>
        <div>
          <Link to={`/start/${gameId}`}>
            <button className={styles.no}> NO </button>
          </Link>
          <p>Continue to <br />the game.</p>
        </div>
        <div>
          <Link to={`/instruction/${gameId}`}>
            <button className={styles.yes}> YES </button>
          </Link>
            <p>I want to read <br /> the instructions.</p>
        </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default InvitedInstructions;
