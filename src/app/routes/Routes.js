import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../pages/GameView/GameView";
import Home from "../pages/Home";
import Landing from "../pages/Landing/Landing";
import Onboarding from "../pages/Onboarding/Onboarding";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path="/game" exact component={GameView} />
        {/* <Route path="/feedback" exact component={Feedback} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
