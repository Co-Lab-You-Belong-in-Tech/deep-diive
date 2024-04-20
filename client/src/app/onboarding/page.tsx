"use client";
import React from "react";
import Link from "next/link";

// libraries
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// hooks
import { useOnboardingHook } from "hooks";

// components
import Navbar from "components/Navbar/Navbar";
import Loader from "components/Loader/Loader";
import { Copy } from "components/onboarding/Copy";
import ExitModal from "components/ExitModal/ExitModal";

// styles
import onboardingStyles from "./Onboarding.module.css";
import "./Onboarding.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Slide show buttons
const PreviousBtn: React.FC<any> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};
const NextBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};

//Shareable link (temporary)


//Slide show
const Onboarding = () => {
  const {
    // state values
    gameId,
    modalIsOpen,
  } = useOnboardingHook({});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        {modalIsOpen && <ExitModal />}

        <div className={onboardingStyles.navDiv}>
          <Navbar color="#94B1EB" />
        </div>

        {!gameId && (
          <div className={onboardingStyles.loadingDiv}>
            <Loader hasText={true} />
          </div>
        )}

        {gameId && (
          <div className={onboardingStyles.slide}>
            <Slider
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              infinite={false}
              edgeFriction={0}
              //   direction={"right"}
            >
              <Card1 gameId={gameId} />
              <Card2 gameId={gameId} />
            </Slider>
          </div>
        )}
      </div>
    </motion.div>
  );
};

//Each slide
const Card1 = ({ gameId }: any) => {
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
  );
};

const Card2 = ({ gameId }: any) => {
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
};

export default Onboarding;
