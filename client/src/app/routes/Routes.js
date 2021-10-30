import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GameView from "../pages/GameView/GameView";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";
import InviteOnboarding from "../pages/InviteOnboarding/InviteOnboarding";
import Feedback from "../pages/Feedback/Feedback";
import Instruction from "../pages/Instruction/Instruction";

const Routes = () => {
  const name = localStorage.getItem("name");
  const newPlayer = localStorage.getItem("newPlayer");
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path="/instruction" exact component={Instruction} />
        <Route path="/onboarding/invite" exact component={InviteOnboarding} />
        {name || newPlayer ? (
          <Route exact path="/game/:gameId" component={GameView} />
        ) : (
          <Redirect
            to="/onboarding/invite"
            exact
            component={InviteOnboarding}
          />
        )}
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Routes;
