import logo from "../../assets/logo-white.svg";
import logoIcon from "../../assets/logo_circle.png";
import times from "../../assets/exit-icon.svg";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";

const Navbar = ({openModal}) => {
    return (
        <nav className={navbarStyles.navbar}>
            <div className={navbarStyles.logoDiv}>
                <img className={navbarStyles.icon} src={logoIcon} alt="" />
                <img className={navbarStyles.name} src={logo} alt="" />
            </div>
            <div className={navbarStyles.buttons}>
                <button ><img src={linkIcon} alt="times" /></button>
                <button onClick={openModal} ><img src={times} alt="times" /></button>
            </div>
        </nav>
    )
}

export default Navbar;
