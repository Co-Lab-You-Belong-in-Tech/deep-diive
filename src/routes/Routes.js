import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameView from "../app/pages/GameView/GameView";
import Home from "../app/pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={GameView} />
      </Switch>
    </Router>
  );
};

export default Routes;
