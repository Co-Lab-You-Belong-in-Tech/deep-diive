import { DEEPDIIVE_GIFS } from "../../constants/gallery";
import instructionCardStyles from "./instructionCard.module.css";

export const INSTRUCTION_CARD_DETAILS = [
  {
    gif: DEEPDIIVE_GIFS.onboarding1,
    text: (
      <h1>
        Once your workmate arrives, <br />
        the host will press{" "}
        <span className={instructionCardStyles.highlight}>Start</span>
        and everyone will select the player that answers first.
      </h1>
    ),
    buttonText: "skip",
  },
  {
    gif: DEEPDIIVE_GIFS.onboarding2,
    text: (
      <h1>
        Once you all are done answering the question, the host picks a new one
        by pressing{" "}
        <span className={instructionCardStyles.highlight}>Next Card.</span>
      </h1>
    ),
    buttonText: "skip",
  },
  {
    gif: DEEPDIIVE_GIFS.onboarding3,
    text: (
      <h1>
        If you don’t like a question or it makes you feel uncomfortable, the
        host can also click
        <span className={instructionCardStyles.highlight}> Next Card.</span>
      </h1>
    ),
    subText:
      "All players can see cards change live but should not question why someone chooses to skip.",
    buttonText: "skip",
  },
  {
    gif: DEEPDIIVE_GIFS.onboarding4,
    text: (
      <h1>
        Take turns alternating who answers a question. If you want to go back to
        a previous card, the host can click{" "}
        <span className={instructionCardStyles.highlight}>Back.</span>
      </h1>
    ),
    buttonText: "skip",
  },
  {
    gif: DEEPDIIVE_GIFS.onboarding5,
    text: (
      <h1>
        When you are done playing, simply press the{" "}
        <span className={instructionCardStyles.highlight}>X</span> at the top right
        of your screen.
      </h1>
    ),
    buttonText: "continue",
  },
];
