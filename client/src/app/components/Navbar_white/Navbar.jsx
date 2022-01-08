import logo from "../../assets/logo-white.svg";
import logoIcon from "../../assets/logo_circle.png";
import times from "../../assets/exit-icon.svg";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({openModal}) => {

    function copyUrl(event) {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }

    return (
        <nav className={navbarStyles.navbar}>
            <div className={navbarStyles.logoDiv}>
                <img className={navbarStyles.icon} src={logoIcon} alt="logo" />
                <Link to={`/`}>
                    <img className={navbarStyles.name} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={navbarStyles.buttons}>
                <button onClick={copyUrl}><img src={linkIcon} alt="link" /></button>
                <button onClick={openModal} ><img src={times} alt="x" /></button>
            </div>
        </nav>
    )
}

export default Navbar;
