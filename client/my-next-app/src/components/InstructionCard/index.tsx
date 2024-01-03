import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InstructionCardProps } from "components/types";
import instructionStyles from "../../app/instructions/Instructions.module.css";

const InstructionCard = ({
  gameId,
  image,
  content,
  lastItem,
}: InstructionCardProps) => {
  return (
    <div className={instructionStyles.view}>
      <Image src={image} alt="start instruction" width={477} height={200} />
      {content}
      {!lastItem ? (
        <div>
          <Link href={`/start/${gameId}`}>
            <button className={instructionStyles.skipbutton}> Skip </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link href={`/start/${gameId}`}>
            <button className={instructionStyles.readyButton}>CONTINUE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InstructionCard;
