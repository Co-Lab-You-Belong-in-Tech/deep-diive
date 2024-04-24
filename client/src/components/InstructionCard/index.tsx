import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InstructionCardProps } from "components/types";
import styles from "../../app/instructions/Instructions.module.css";

const InstructionCard = ({
  gameId,
  image,
  content,
  lastItem,
}: InstructionCardProps) => {
  console.log({ gameId })
  return (
    <div className={styles.view}>
      <div className={styles.img_div}>
        <Image src={image} alt="start instructions" sizes="100vw" width="0"
          height="0" className={styles.image} />
      </div>
      {content}
      {!lastItem ? (
        <div>
          <Link href={`/game-start/${gameId}`}>
            <button className={styles.skipbutton}> Skip </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link href={`/game-start/${gameId}`}>
            <button className={styles.readyButton}>CONTINUE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InstructionCard;
