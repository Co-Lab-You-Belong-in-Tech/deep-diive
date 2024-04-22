// core
import React from "react";
import Link from "next/link";
import Image from "next/image";

// constants
import { RoutePath } from "routes";
import { DEEPDIIVE_IMAGES } from "constants/gallery";

// styles
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={DEEPDIIVE_IMAGES.logoIcon}
        alt=""
        width={100}
        height={100}
        priority
      />

      <h1>Deepdiive</h1>
      <div>
        <p>Ride the wave of better conversations.</p>
        <p>This is not your average icebreaker.</p>
      </div>
      <Link href={RoutePath.Game}>
        <button className={styles.button}>Take a DeepDiive</button>
      </Link>
    </div>
  );
};

export default Hero;
