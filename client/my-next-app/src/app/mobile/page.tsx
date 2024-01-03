"use client";
import React from "react";
import Image from "next/image";
import mobileStyles from "./Mobile.module.css";
import logoIcon from "../../assets/logo_circle.png";
import wave from "../../assets/mobile-wave.png";
import chrome from "../../assets/svgs/chrome.svg";
import { Logo } from "assets/svgs";

const Mobile: React.FC = () => {
  return (
    <div>
      <div className={mobileStyles.navDiv}>
        <Image
          className={mobileStyles.icon}
          src={logoIcon}
          alt="logo"
          style={{ width: "44px", height: "44px" }}
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
