import mobileStyles from "./Mobile.module.css";
import logo from "../../assets/logo-blue.svg";
import logoIcon from "../../assets/logo_circle.png";
import wave from "../../assets/mobile-wave.png";
import chrome from "../../assets/svg/chrome.svg";
import Image from "next/image";

const Mobile = () => {
  return (
    <div>
      <div className={mobileStyles.navDiv}>
        <Image
          className={mobileStyles.icon}
          src={logoIcon}
          alt="logo"
          style={{ width: "44px", height: "44px" }}
        />
        <Image
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
          <Image src={chrome} alt="" />
        </p>
      </div>
      <Image className={mobileStyles.wave} src={wave} alt="wave" />
    </div>
  );
};

export default Mobile;
