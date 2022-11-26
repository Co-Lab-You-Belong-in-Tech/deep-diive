import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";
import { DeepDiiveLogo, ExitIcon } from "../../assets/svgs";

const Navbar = (props) => {
  const { openModal } = useContext(GlobalContext);

  function copyUrl(event) {
    const urllink = localStorage.getItem("url_link");
    navigator.clipboard.writeText(urllink);
  }

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logoDiv}>
        <img
          className={navbarStyles.icon}
          src={DEEPDIIVE_IMAGES.logoIcon}
          alt="deepdiive logo"
        />
        <Link to={`/`}>
          <DeepDiiveLogo
            style={{ fill: props.logo === "blue" ? "#94B1EB" : "#FDFCFB" }}
          />
        </Link>
      </div>
      <div className={navbarStyles.buttons}>
        <button onClick={copyUrl}>
          <img src={linkIcon} alt="link" />
        </button>
        <button onClick={openModal}>
          <ExitIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
