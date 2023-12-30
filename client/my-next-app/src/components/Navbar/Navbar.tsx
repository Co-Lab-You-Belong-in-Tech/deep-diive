import { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalState";
import logoIcon from "../../assets/logo_circle.png";
import times from "../../assets/svg/exit-icon.svg";
import linkIcon from "../../assets/link-icon.svg";
import navbarStyles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = (props: any) => {
  const { openModal }: any = useContext(GlobalContext);

  function copyUrl(event: any) {
    const urllink: any = localStorage.getItem("url_link");
    navigator.clipboard.writeText(urllink);
  }

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logoDiv}>
        <Image className={navbarStyles.icon} src={logoIcon} alt="logo" />
        <Link href={`/`}>
          <img className={navbarStyles.name} src={props.logo} alt="logo" />
        </Link>
      </div>
      <div className={navbarStyles.buttons}>
        <button onClick={copyUrl}>
          <img src={linkIcon} alt="link" />
        </button>
        <button onClick={openModal}>
          <img src={times} alt="x" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
