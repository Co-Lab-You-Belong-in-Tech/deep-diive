import times from "../../assets/exit-icon.svg";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";

const Navbar = ({openModal}) => {
    return (
        <nav className={navbarStyles.navbar}>
            <h1>logo</h1>
            <div className={navbarStyles.buttons}>
                <button ><img src={linkIcon} alt="times" /></button>
                <button onClick={openModal} ><img src={times} alt="times" /></button>
            </div>
        </nav>
    )
}

export default Navbar;
