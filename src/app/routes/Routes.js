import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import Feedback from "../pages/Feedback/Feedback";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path="/game" exact component={GameView} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Routes;
