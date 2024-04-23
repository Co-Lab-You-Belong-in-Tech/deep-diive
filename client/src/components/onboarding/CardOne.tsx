// core
import React from "react";

// libraries
import { motion } from "framer-motion";

// styles
import onboardingStyles from "app/onboarding/Onboarding.module.css";
import { Copy } from "./Copy";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const CardOne: React.FC<any> = ({ gameId }) => {
  const name = localStorage.getItem("deepdiive_host");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={onboardingStyles.view}>
        <h1>
          Nice to meet you, <span>{name}</span>! Time to invite your workmate.
        </h1>
        <h2>
          Copy the invite link below and share with one workmate. Use this{" "}
          <span className={onboardingStyles.highlight}>two player</span> game
          with your favourite video conference app!{" "}
        </h2>
        <p>
          (Don’t worry, if you’re confused, there will be instructions on how to
          play! 🙌 )
        </p>

        <div className={onboardingStyles.copybutton}>
          <label>Invite Link</label>
          <Copy copyText={`${appUrl}/game/${gameId}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default CardOne;