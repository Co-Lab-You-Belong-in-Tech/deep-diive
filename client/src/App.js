import Routers from "./app/routes/Routes";
import { isMobile } from 'react-device-detect';
import "./App.css";
import Mobile from "./app/pages/Mobile/Mobile";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      {isMobile ? <Mobile/> : <Routers />}
    </Router>
  );
}

export default App;
