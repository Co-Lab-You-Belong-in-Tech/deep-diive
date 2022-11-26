import { useContext } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Instruction.css";
import instructionStyles from "./Instruction.module.css";
import Navbar from "../../components/Navbar/Navbar";
import ExitModal from "../../components/ExitModal/ExitModal";
import { GlobalContext } from "../../context/GlobalState";
import { motion } from "framer-motion";
import { INSTRUCTION_CARD_DETAILS } from "../../components/InstructionCard/constants";
import InstructionCard from "../../components/InstructionCard";
import { PreviousArrowBtn, NextArrowBtn } from "../../components/Common";

//Slide show
const Instruction = () => {
  const { modalIsOpen } = useContext(GlobalContext);
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
          <Navbar logo={"blue"} />
        </div>

        <div className={instructionStyles.slide}>
          <Slider
            prevArrow={<PreviousArrowBtn />}
            nextArrow={<NextArrowBtn />}
            dots
            infinite={false}
            edgeFriction={0}
            direction={"right"}
          >
            {INSTRUCTION_CARD_DETAILS.map((card, i) => (
              <InstructionCard
                key={i}
                gameId={gameId}
                gif={card.gif}
                buttonText={card.buttonText}
                text={card.text}
              />
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default Instruction;
