import mobileStyles from "./Mobile.module.css";
import wave from "../../assets/mobile-wave.png";
import chrome from "../../assets/svgs/chrome.svg";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";
import { DeepDiiveLogo } from "../../assets/svgs";

const Mobile = () => {
  return (
    <div>
      <div className={mobileStyles.navDiv}>
        <img
          className={mobileStyles.icon}
          src={DEEPDIIVE_IMAGES.logoIcon}
          alt="deepdiive logo"
          style={{ width: "44px", height: "44px" }}
        />
        <DeepDiiveLogo style={{ fill: "#94B1EB" }} />
      </div>
      <div className={mobileStyles.mobile}>
        <h1>Whoops!</h1>
        <p>DeepDiive is not available yet on mobile.</p>
        <p>
          For the best experience access DeepDiive via Google Chrome on desktop.
          <img src={chrome} alt="" />
        </p>
      </div>
      <img className={mobileStyles.wave} src={wave} alt="wave" />
    </div>
  );
};

export default Mobile;
