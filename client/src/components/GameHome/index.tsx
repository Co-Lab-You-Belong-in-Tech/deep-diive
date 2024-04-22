// core
import React, { useEffect, useState } from "react";
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
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = windowSize.width < 700 ? 40 : 60;
  const imageHeight = windowSize.width < 700 ? 40 : 60;

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
            width={imageWidth}
            height={imageHeight}
          />

          {/* <Image
        src={DEEPDIIVE_IMAGES.logoIcon}
        alt="deepdiive logo"
        layout="fill"
        objectFit="cover"
      /> */}

          <BigDeepdiive style={{ maxWidth: "278px", width: "100%" }} />
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
            <div>
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input
                value={user}
                placeholder="Your name"
                id="name"
                onChange={changeHandler}
              />
            </div>
            <button>Let’s Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameHome;
