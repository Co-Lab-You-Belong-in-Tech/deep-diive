"use client";
// core
import React from "react";

// libraries
import { motion } from "framer-motion";

// assets
import GameId from "components/GameHome/GameId";
// import * as gameEvents from "../../helpers/events";

const GameWithId: React.FC = () => {
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GameId />
    </motion.div>
  );
};

export default GameWithId;
