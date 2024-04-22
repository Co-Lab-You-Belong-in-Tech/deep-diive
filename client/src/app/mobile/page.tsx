"use client";
import React from "react";
import Image from "next/image";
import mobileStyles from "./Mobile.module.css";
import wave from "../../assets/mobile-wave.png";
import chrome from "../../assets/svgs/chrome.svg";
import { Logo } from "assets/svgs";
import { DEEPDIIVE_IMAGES } from "constants/gallery";

const Mobile: React.FC = () => {
  return (
    <div>
      <div className={mobileStyles.navDiv}>
        <Image
          className={mobileStyles.icon}
          src={DEEPDIIVE_IMAGES.logoIcon}
          alt="logo"
          width={44}
          height={44}
        />
        <Logo color="#94B1EB" />
      </div>
      <div className={mobileStyles.mobile}>
        <h1>Whoops!</h1>
        <p>DeepDiive is not available yet on mobile.</p>
        <p>
          For the best experience access DeepDiive via Google Chrome on desktop.
          <Image src={chrome} alt="" />
        </p>
      </div>
      <Image className={mobileStyles.wave} src={wave} alt="wave" />
    </div>
  );
};

export default Mobile;
