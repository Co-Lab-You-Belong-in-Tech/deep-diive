// core
import React from "react";
import Link from "next/link";
import Image from "next/image";

// constants
import { RoutePath } from "routes";
import { DEEPDIIVE_IMAGES } from "constants/gallery";

// assets
import { ExitIcon, LinkIcon, Logo } from "assets/svgs";

// utils
import { NavbarProps } from "components/types";
import { useToggleModalStore } from "store/modals";

// styles 
import navbarStyles from "./Navbar.module.css";

const Navbar: React.FC<NavbarProps> = ({ color }) => {

  function copyUrl(event: any) {
    const urllink: any = localStorage.getItem("url_link");
    navigator.clipboard.writeText(urllink);
  }

  const { openModal } = useToggleModalStore();

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logoDiv}>
        <Image
          className={navbarStyles.icon}
          src={DEEPDIIVE_IMAGES.logoIcon}
          alt="logo"
          width={40}
          height={40}
          priority
        />
        <Link href={RoutePath.Game}>
          <Logo color={color} />
        </Link>
      </div>
      <div className={navbarStyles.buttons}>
        <button onClick={copyUrl}>
          <LinkIcon />
        </button>
        <button onClick={openModal}>
          <ExitIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
