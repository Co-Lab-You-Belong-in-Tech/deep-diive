import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { usePathname } from "../hooks/usePathname";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import InviteOnboarding from "../pages/InviteOnboarding/InviteOnboarding";
import Feedback from "../pages/Feedback/Feedback";
import Instruction from "../pages/Instruction/Instruction";
import GameStart from "../pages/GameStart/GameStart";
import InvitedInstructions from "../pages/InvitedInstructions/InvitedInstructions";
import ReactGA from 'react-ga';
import InitializeReactGA from "../helpers/googleAnalytics";
import { AnimatePresence } from "framer-motion";

function usePageViews() {
  
  let pathname = usePathname();
	useEffect(() => {
    InitializeReactGA(ReactGA);
		ReactGA.set({ page: pathname });
		ReactGA.pageview(pathname);
    // console.log(pathname);
	}, [pathname]);
}

const Routers = () => {
  const location = useLocation();

  const setGA = () => {
    ReactGA.initialize('G-QGGY6NY4E9', {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 123,
        siteSpeedSampleRate: 100
      }
    });
  };

  useEffect(() => {
    setGA();
  }, [])

  usePageViews();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default Routers;
