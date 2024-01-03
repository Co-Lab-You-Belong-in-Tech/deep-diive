import React from "react";
import Link from "next/link";
import logoIcon from "../../assets/logo_circle.png";
import navbarStyles from "./Navbar.module.css";
import Image from "next/image";
import { ExitIcon, LinkIcon, Logo } from "assets/svgs";
import { useToggleModalStore } from "store/modals";
import { NavbarProps } from "components/types";

const Navbar: React.FC<NavbarProps> = ({color}) => {

  function copyUrl(event: any) {
    const urllink: any = localStorage.getItem("url_link");
    navigator.clipboard.writeText(urllink);
  }

  const { openModal } = useToggleModalStore();

  const openModals = () => {
    console.log(1)
    openModal()
    console.log(2)
  }

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logoDiv}>
        <Image className={navbarStyles.icon} src={logoIcon} alt="logo" />
        <Link href={`/`}>
          <Logo color={color} />
        </Link>
      </div>
      <div className={navbarStyles.buttons}>
        <button onClick={copyUrl}>
          <LinkIcon />
        </button>
        <button onClick={openModals}>
          <ExitIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
