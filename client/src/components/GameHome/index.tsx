// core
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// libraries
import { toast } from "sonner";

// constants
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";
import { BigDeepdiive } from "assets/svgs";

// styles
import gameStyles from "./gamehome.module.css";

// assets
import chromeIcon from "../../assets/svgs/chrome.svg";

const GameHome: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const validateName = (e: any) => {
    e.preventDefault();
    if (user.length < 1) {
      toast.error("Please enter your name");
    } else {
      router.push(`/onboarding`);
    }
  };

  const changeHandler = (e: any) => {
    const deepdiive_host = e.target.value;

    localStorage.setItem("deepdiive_host", deepdiive_host);
    setUser(deepdiive_host);
  };
  
  return (
    <div className={gameStyles.landing}>
      <nav>
        <div className={gameStyles.logoDiv}>
          <Image
            src={DEEPDIIVE_IMAGES.logoIcon}
            alt="deepdiive logo"
            width={60}
            height={60}
          />
          <BigDeepdiive />
        </div>
      </nav>

      <div className={gameStyles.grid}>
        <img
          src={DEEPDIIVE_IMAGES.landingPageImage}
          alt="people on their laptops"
          className={gameStyles.bigImage}
        />
        <div>
          <div className={gameStyles.title}>
            <span>
              Ride the Wave of <br />
            </span>
            <span>Better Conversations</span>
          </div>
          <p>
            Unwind with workmates and have meaningful conversations using our
            virtual card deck. Take turns answering questions from the selected
            cards
            <span className={gameStyles.highlight}>
              {" "}
              alongside your favorite video chat platform.
            </span>
          </p>
          <p className={gameStyles.chrome}>
            Best Experience with
            <span className={gameStyles.highlight}> Google Chrome </span>
            <Image src={chromeIcon} alt="chrome" />
          </p>
          <p>Enter your name below to get started!</p>
          <form className={gameStyles.form} onSubmit={validateName}>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              value={user}
              placeholder="Your name"
              id="name"
              onChange={changeHandler}
            />
            <button>Let’s Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameHome;
