import Routers from "./app/routes/Routes";
import { isMobile } from 'react-device-detect';
import "./App.css";
import Mobile from "./app/pages/Mobile/Mobile";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalContext from "./app/context/GlobalState";

function App() {
  return (
    <GlobalContext>
      <Router>
        {isMobile ? <Mobile/> : <Routers />}
      </Router>
    </GlobalContext>
  );
}

export default App;
