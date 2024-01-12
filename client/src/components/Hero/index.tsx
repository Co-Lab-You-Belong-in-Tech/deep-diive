import React from "react";
import Link from "next/link";
import { RoutePath } from "routes";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <div>
      <Link href={RoutePath.Game}>
        <button className={styles.button}>Play</button>
      </Link>
    </div>
  );
};

export default Hero;
