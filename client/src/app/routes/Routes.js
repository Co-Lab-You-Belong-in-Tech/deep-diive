import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import InviteOnboarding from "../pages/InviteOnboarding/InviteOnboarding";
import Feedback from "../pages/Feedback/Feedback";
import Instruction from "../pages/Instruction/Instruction";
import GameStart from "../pages/GameStart/GameStart";
import InvitedInstructions from "../pages/InvitedInstructions/InvitedInstructions";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/v1/onboarding" exact component={Onboarding} />
        <Route path="/v1/instruction/:gameId" exact component={Instruction} />
        <Route
          path="/v1/onboarding/invite/:gameId"
          exact
          component={InviteOnboarding}
        />
        <Route
          path="/v1/instruction/invite/:gameId"
          exact
          component={InvitedInstructions}
        />
        <Route exact path="/v1/game/:gameId" component={GameView} />
        <Route exact path="/v1/start/:gameId" component={GameStart} />
        <Route path="/v1/feedback" exact component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Routes;
