import { DEEPDIIVE_GIFS } from "constants/gallery";
import instructionStyles from "../app/instructions/Instructions.module.css";

export const INSTRUCTIONS_DATA = [
  {
    image: DEEPDIIVE_GIFS.onboarding1,
    content: (
      <h1>
        Once your workmate arrives, <br /> the host will press{" "}
        <span className={instructionStyles.highlight}>Start</span> and everyone
        will select the player that answers first.
      </h1>
    ),
    lastItem: false,
  },
  {
    image: DEEPDIIVE_GIFS.onboarding2,
    content: (
      <h1>
        Once you all are done answering the question, the host picks a new one
        by pressing{" "}
        <span className={instructionStyles.highlight}>Next Card.</span>
      </h1>
    ),
    lastItem: false,
  },
  {
    image: DEEPDIIVE_GIFS.onboarding3,
    content: (
      <h1>
        If you don’t like a question or it makes you feel uncomfortable, the
        host can also click{" "}
        <span className={instructionStyles.highlight}> Next Card.</span>
      </h1>
    ),
    lastItem: false,
  },
  {
    image: DEEPDIIVE_GIFS.onboarding4,
    content: (
      <h1>
        Take turns alternating who answers a question. If you want to go back to
        a previous card, the host can click{" "}
        <span className={instructionStyles.highlight}>Back.</span>
      </h1>
    ),
    lastItem: false,
  },
  {
    image: DEEPDIIVE_GIFS.onboarding5,
    content: (
      <h1>
        When you are done playing, simply press the{" "}
        <span className={instructionStyles.highlight}>X</span> at the top right
        of your screen.
      </h1>
    ),
    lastItem: true,
  },
];
