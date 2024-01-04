"use client";
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import instructionStyles from "./Instructions.module.css";
import Navbar from "../../components/Navbar/Navbar";
import ExitModal from "../../components/ExitModal/ExitModal";
import { motion } from "framer-motion";
import { useToggleModalStore } from "store/modals";
import { INSTRUCTIONS_DATA } from "data/instructions.data";
import InstructionCard from "components/InstructionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Instructions.css";

//Slide show buttons
const PreviousBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};
const NextBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};

//Slide show
const Instruction: React.FC = () => {
  const { modalIsOpen } = useToggleModalStore();
  const { gameId } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        {modalIsOpen && <ExitModal />}
        <div className={instructionStyles.navDiv}>
          <Navbar color="#94B1EB" />
        </div>

        <div className={instructionStyles.slide}>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            dots
            infinite={false}
            edgeFriction={0}
            // direction={"right"}
          >
            {INSTRUCTIONS_DATA.map((instruction) => (
              <InstructionCard
                gameId={gameId}
                image={instruction.image}
                content={instruction.content}
                lastItem={instruction.lastItem}
              />
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default Instruction;
