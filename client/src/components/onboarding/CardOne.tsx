// core
import React from 'react';

// libraries
import { motion } from "framer-motion";

// styles
import onboardingStyles from "app/onboarding/Onboarding.module.css";
import { Copy } from './Copy';

export const CardOne: React.FC<any> = ({gameId}) => {

    const name = localStorage.getItem("deepdiive_host");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
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
            (Don’t worry, if you’re confused, there will be instructions on how
            to play! 🙌 )
          </p>
          <div className={onboardingStyles.copybutton}>
            <p>Invite Link</p>
            {/* production */}
            {/* <Copy copyText={`https://deepdiive.netlify.app/game/${gameId}`} /> */}
            {/* staging */}
            {/* <Copy copyText={`https://deepdiive-staging.netlify.app/game/${gameId}`} /> */}
            {/* local */}
            <Copy copyText={`http://localhost:3000/game/${gameId}`} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
