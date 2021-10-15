import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../app/pages/GameView/GameView";
import Home from "../app/pages/Home";
import Landing from "../app/pages/Landing/Landing";
import Onboarding from "../app/pages/Onboarding/Onboarding";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path="/game" exact component={GameView} />
      </Switch>
    </Router>
  );
};

export default Routes;
