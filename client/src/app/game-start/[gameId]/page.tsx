"use client";
// core
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter, useParams } from 'next/navigation';

// components
import Players from "components/Players/Players";
import PickCard from "components/PickCard/PickCard";
import ExitModal from "components/ExitModal/ExitModal";

// utils
import deepdiiveApi from "../../../api/deepdiiveApi";
import * as gameEvents from "../../../helpers/events";
import { userIsGameHost } from "../../../helpers/utils";

// hooks
import { useToggleModalStore } from "store/modals";

// styles
import gameStyles from "../GameStart.module.css";

// dynamic imports
const Navbar = dynamic(() => import('components/Navbar/Navbar'), {
  ssr: false,
})

const GameStart: React.FC = () => {
  const router = useRouter();
  // const { gameId } = router.query;
  const {gameId} = useParams();

  // const gameId = "eu494dkd"

  const [host, setHost] = useState("");
  const [guest, setGuest] = useState("");
  const [isGameHost, setIsGameHost] = useState(false);
  const [gameContinue, setGameContinue] = useState(false);
  const { modalIsOpen } = useToggleModalStore();

  useEffect(() => {
    gameEvents.connect(gameId, () => {
      setGameContinue(true);
    });
    gameEvents.guestJoin(gameId);
  }, [gameId]);

  useEffect(() => {
    const getGameUsers = async () => {
      try {
        const { data }: any = await deepdiiveApi.get(`/links/users/${gameId}`);

        /* 
          set the host to be the first name in the players array,
          and the guest would be the second name
        */
        setHost(data.players[0]);
        setGuest(data.players[1]);

        const isHost = userIsGameHost(data.players[0]);
        setIsGameHost(isHost);

        gameEvents.onGuestJoinGame(() => {
          setGuest(data.players[1]);
          console.log(`${guest} is here`);
        });

        // if user is the host, navigate to game
        if (!isHost) {
          gameEvents.onGuestGameStart(() => {
            router.push(`/game/${gameId}`);
          });
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    getGameUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  return (
    <div>
      {modalIsOpen && <ExitModal />}

      <div className={gameStyles.gameDiv}>
        <div className={gameStyles.navDiv}>
          <Navbar color="#FDFCFB" />
        </div>
        <div className={gameStyles.cardDiv}>
          <PickCard gameContinue={gameContinue} isGameHost={isGameHost} />
        </div>
        <div className={gameStyles.playerDiv}>
          <Players host={host} guest={guest} />
        </div>
      </div>
    </div>
  );
};

export default GameStart;
