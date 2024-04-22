// core
import React from 'react';
import Link from "next/link";

// libraries
import { motion } from "framer-motion";

// styles
import onboardingStyles from "app/onboarding/Onboarding.module.css";

export const CardTwo: React.FC<any> = ({ gameId }) => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={onboardingStyles.view}>
            <h1>
              Is this your first time <br /> taking a DeepDiive?
            </h1>
    
            <div className={onboardingStyles.yesnobutton}>
              <div>
                <Link href={`/start/${gameId}`}>
                  <button className={onboardingStyles.no}> NO </button>
                </Link>
                <p>
                  Continue to <br />
                  the game.
                </p>
              </div>
              <div>
                <Link href={`/instructions/${gameId}`}>
                  <button className={onboardingStyles.yes}> YES </button>
                </Link>
                <p>
                  I want to read <br /> the instructions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );
}
