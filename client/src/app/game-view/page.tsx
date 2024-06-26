"use client";
// core
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, useParams } from 'next/navigation';

// libraries
import Modal from "react-modal";
import { motion } from "framer-motion";

// components
import Card from "components/Card/Card";
import Players from "components/Players/Players";
import { Loader } from "components/common/Loader";
import ExitAlert from "components/ExitAlert/ExitAlert";
import GuestCard from "components/GuestCard/GuestCard";

// utils
import deepdiiveApi from "api/deepdiiveApi";
import * as gameEvents from "helpers/events";
import { useToggleModalStore } from "store/modals";
import {userIsGameHost, userIsGuest} from "helpers/utils";

// styles
import gameStyles from "./GameView.module.css";
// import Reactions from "components/Reactions/Reactions";

// dynamic imports
const Navbar = dynamic(() => import('components/Navbar/Navbar'), {
  ssr: false,
})

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

const GameView:React.FC = () => {
  const [host, setHost] = useState("");
  const [guest, setGuest] = useState("");
  const [isGameHost, setIsGameHost] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const { gameId } = useParams();
  const router = useRouter();
  const { modalIsOpen, closeModal }: any = useToggleModalStore();

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true)
    setTimeout(() => { setShowLoader(false) }, 3000);
  }, [])
  
  useEffect(() => {
    const getGameUsers = async () => {
      const { data }: any = await deepdiiveApi.get(
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
        router.push(`/onboarding/invite/${gameId}`);
      } 

      // shows modal when other player has ended game
      gameEvents.onGameEnd(() => {
        setShowExitModal(true);
      })
    };
    getGameUsers();
  }, [gameId, isGameHost, router]);

  // ends game
  const endGame = () => {
    gameEvents.endGame(gameId);
  }

  return showLoader ? <Loader hasText={false} /> : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        ariaHideApp={false}
        contentLabel="Exit Modal"
        closeTimeoutMS={300}
      >
        <p className={gameStyles.modalText}>Are you sure you want to exit?</p>
        <div className={gameStyles.modalButtons}>
          <button onClick={closeModal}>no</button>
          <Link href="/feedback">
            <button className={gameStyles.yes} onClick={endGame}>yes</button>
          </Link>
        </div>
      </Modal>
      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar color="#FDFCFB" />
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
    </motion.div>
  );
};

export default GameView;
