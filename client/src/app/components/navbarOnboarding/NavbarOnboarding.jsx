import logo from "../../assets/logo-blue.svg";
import logoIcon from "../../assets/logo_circle.png";
import times from "../../assets/exit-icon.svg";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";

const NavbarOnboarding = ({ openModal }) => {
  // const [imgSrc, setImgSrc] = useState("");
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logoDiv}>
        <img className={navbarStyles.icon} src={logoIcon} alt="logo" />
        <img className={navbarStyles.name} src={logo} alt="logo" />
      </div>
      <div className={navbarStyles.buttons}>
        <button>
          <img src={linkIcon} alt="link" />
        </button>
        <button onClick={openModal}>
          <img src={times} alt="x" />
        </button>
      </div>
    </nav>
  );
};

export default NavbarOnboarding;
