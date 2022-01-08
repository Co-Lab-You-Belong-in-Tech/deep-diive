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
        <Route path="/v1/onboarding" element={<Onboarding />} />
        <Route path="/v1/instruction/:gameId" element={<Instruction />} />
        <Route
          path="/v1/onboarding/invite/:gameId"
          element={<InviteOnboarding />}
        />
        <Route
          path="/v1/instruction/invite/:gameId"
          element={<InvitedInstructions />}
        />
        <Route path="/v1/game/:gameId" element={<GameView />} />
        <Route path="/v1/start/:gameId" element={<GameStart />} />
        <Route path="/v1/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default Routers;
