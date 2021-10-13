import logo from "../../assets/logo.svg";
import times from "../../assets/exit-icon.svg";
import navbarStyles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <img src={logo} alt="logo" />
            <button><img src={times} alt="times" /> Exit</button>
        </nav>
    )
}

export default Navbar;
