import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../app/pages/GameView/GameView";
import Home from "../app/pages/Home";
import Feedback from "../app/pages/Feedback/Feedback";
// import LandingPage from "../app/pages/Landing/Landing";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={GameView} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Routes;
