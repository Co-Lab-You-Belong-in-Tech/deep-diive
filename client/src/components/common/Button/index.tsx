import React from "react";

// constants
import { ButtonProps } from "../types";

// styles
import styles from "./styles.module.css";

export const Button: React.FC<ButtonProps> = ({onClick, text}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
