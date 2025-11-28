import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoutePath } from "routes";
import { DEEPDIIVE_IMAGES } from "constants/gallery";
import { LinkedInIconTransparent, Logo, TwitterIcon } from "assets/svgs";
import styles from "./nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
        {/* <div className={styles.empty}>

        </div> */}
      <div className={styles.logoDiv}>
        <Image
          className={styles.icon}
          src={DEEPDIIVE_IMAGES.logoIcon}
          alt="logo"
          width={40}
          height={40}
          priority
        />
        <Link href={RoutePath.Game}>
          <Logo color="#94B1EB" />
        </Link>
      </div>
      <div className={styles.socials}>
        <Link href="https://www.linkedin.com/company/deepdiiveapp" target="_blank" rel="noopener noreferrer">
            <LinkedInIconTransparent />
        </Link>
        <Link href="https://twitter.com/DeepdiiveApp" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
        </Link>

      </div>
    </nav>
  );
};

export default Nav;
