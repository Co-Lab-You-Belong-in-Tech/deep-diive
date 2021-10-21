import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GameContext } from "../store/gameContext";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import Feedback from "../pages/Feedback/Feedback";

const Routes = () => {
  const { url } = useContext(GameContext);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path={`/game/${url}`} exact component={GameView} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Routes;
