// core
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// libraries
import { toast } from "react-toastify";

// constants
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";
import { BigDeepdiive } from "assets/svgs";

// styles
import landingStyles from "./landing.module.css";

// assets
import chromeIcon from "../../assets/svgs/chrome.svg";

const Landing = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const validateName = (e: any) => {
    e.preventDefault();
    if (user.length < 1) {
      toast.error("Please enter your name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <div className={landingStyles.landing}>
      <nav>
        <div className={landingStyles.logoDiv}>
          <Image
            src={DEEPDIIVE_IMAGES.logoIcon}
            alt="deepdiive logo"
            width={60}
            height={60}
          />
          <BigDeepdiive />
        </div>
      </nav>

      <div className={landingStyles.grid}>
        <img
          src={DEEPDIIVE_IMAGES.landingPageImage}
          alt="people on their laptops"
          className={landingStyles.bigImage}
        />
        <div>
          <div className={landingStyles.title}>
            <span>
              Ride the Wave of <br />
            </span>
            <span>Better Conversations</span>
          </div>
          <p>
            Unwind with workmates and have meaningful conversations using our
            virtual card deck. Take turns answering questions from the selected
            cards
            <span className={landingStyles.highlight}>
              {" "}
              alongside your favorite video chat platform.
            </span>
          </p>
          <p className={landingStyles.chrome}>
            Best Experience with
            <span className={landingStyles.highlight}> Google Chrome </span>
            <Image src={chromeIcon} alt="chrome" />
          </p>
          <p>Enter your name below to get started!</p>
          <form className={landingStyles.form} onSubmit={validateName}>
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

export default Landing;
