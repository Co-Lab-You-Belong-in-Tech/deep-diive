import mobileStyles from "./Mobile.module.css";
import logo from "../../assets/logo-blue.svg";
import logoIcon from "../../assets/logo_circle.png";
import wave from "../../assets/mobile-wave.png";
import chrome from "../../assets/svg/chrome.svg";

const Mobile = () => {
  return (
    <div>
      <div className={mobileStyles.navDiv}>
        <img
          className={mobileStyles.icon}
          src={logoIcon}
          alt="logo"
          style={{ width: "44px", height: "44px" }}
        />
        <img
          className={mobileStyles.name}
          src={logo}
          alt="logo"
          style={{ height: "28px" }}
        />
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
