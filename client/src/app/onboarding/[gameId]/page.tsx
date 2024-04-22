"use client";
// core
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { motion } from "framer-motion";

import deepdiiveApi from "api/deepdiiveApi";

// hooks
import { useToggleModalStore } from "store/modals";

// components
import ExitModal from "components/ExitModal/ExitModal";

import * as gameEvents from "../../../helpers/events";

// styles
import styles from "./onboarding.module.css";

// dynamic imports
const Navbar = dynamic(() => import('components/Navbar/Navbar'), {
  ssr: false,
})

const InvitedInstructions: React.FC = () => {
  const { modalIsOpen } = useToggleModalStore();
  const { gameId } = useParams();

  const username = localStorage.getItem("deepdiive_guests");

  useEffect(() => {
    gameEvents.guestJoin(gameId);
    gameEvents.onGuestJoinGame(() => {
      console.log("hey");
    });
  }, [gameId]);

  useEffect(() => {
    // add name of player to the game and join
    const joinGame = async () => {
      const { data } = await deepdiiveApi.post(`/links/join/${gameId}`, {
        username: username,
      });
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
          <Navbar color="#94B1EB" />
        </div>
        <div className={styles.view}>
          <h1>
            Is this your first time <br /> taking a DeepDiive?
          </h1>

          <div className={styles.yesnobutton}>
            <div>
              <Link href={`/start/${gameId}`}>
                <button className={styles.no}> NO </button>
              </Link>
              <p>
                Continue to <br />
                the game.
              </p>
            </div>
            <div>
              <Link href={`/instructions/${gameId}`}>
                <button className={styles.yes}> YES </button>
              </Link>
              <p>
                I want to read <br /> the instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvitedInstructions;
