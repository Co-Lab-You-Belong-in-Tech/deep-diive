import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import InviteOnboarding from "../pages/InviteOnboarding/InviteOnboarding";
import Feedback from "../pages/Feedback/Feedback";
import Instruction from "../pages/Instruction/Instruction";
import GameStart from "../pages/GameStart/GameStart";
import InvitedInstructions from "../pages/InvitedInstructions/InvitedInstructions";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/instruction/:gameId" element={<Instruction />} />
        <Route
          path="/onboarding/invite/:gameId"
          element={<InviteOnboarding />}
        />
        <Route
          path="/instruction/invite/:gameId"
          element={<InvitedInstructions />}
        />
        <Route path="/game/:gameId" element={<GameView />} />
        <Route path="/start/:gameId" element={<GameStart />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default Routers;
