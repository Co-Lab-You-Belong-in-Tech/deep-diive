"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import feedbackStyles from "./Feedback.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
// import wave from "../../assets/wave_exit.png";
// import figure from "../../assets/images/figure_exit.png";
import logoIcon from "../../assets/logo_circle.png";
import { Logo } from "assets/svgs";

const Feedback:React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={feedbackStyles.row}>
        <div className={feedbackStyles.column}>
          <div className={feedbackStyles.navDiv}>
            <Image className={feedbackStyles.icon} src={logoIcon} alt="logo" />
            <Link href={`/`}><Logo color="#94B1EB" /></Link>
          </div>
        </div>
        <div className={feedbackStyles.column}>
          <h1>
            Hope you had fun, <br /> see you again soon!
          </h1>
          <button
            className={feedbackStyles.rbutton}
            onClick={() => {
              window.open(
                "https://survey.typeform.com/to/aABypw3e?typeform-source=trello.com",
                "_blank"
              );
            }}
          >
            LEAVE A REVIEW
          </button>
          <hr />
          <h2>
            Tell your workmates <br /> about DeepDiive!
          </h2>
          <div className={feedbackStyles.social}>
            <SocialMedia />
          </div>
        </div>
        <div className={feedbackStyles.column}>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
