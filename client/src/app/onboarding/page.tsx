"use client";
import React from "react";

// libraries
import Slider, {Settings} from "react-slick";
import { motion } from "framer-motion";

// hooks
import { useOnboardingHook } from "hooks";

// components
import Navbar from "components/Navbar/Navbar";
import ExitModal from "components/ExitModal/ExitModal";
import { Loader } from "components/common/Loader";

// styles
import onboardingStyles from "./Onboarding.module.css";
import "./Onboarding.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextBtn, PreviousBtn } from "components/onboarding/SlideButtons";

import { CardTwo } from "components/onboarding/CardTwo";
import { CardOne } from "components/onboarding/CardOne";

//Slide show
const Onboarding = () => {
  const {
    // state values
    gameId,
    modalIsOpen,
    currentSlide,

    // functions
    setCurrentSlide,
  } = useOnboardingHook({});

 

  const settings: Settings = {
    prevArrow: currentSlide === 0 ? undefined : <PreviousBtn />,
    nextArrow: currentSlide === 1 ? undefined : <NextBtn />,
    infinite: false,
    edgeFriction: 0,
    beforeChange: (oldIndex: any, newIndex: any) => {
      setCurrentSlide(newIndex);
    }
  };

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
          <div>
            <Slider
              {...settings}
            >
              <CardOne gameId={gameId} />
              <CardTwo gameId={gameId} />
            </Slider>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Onboarding;
