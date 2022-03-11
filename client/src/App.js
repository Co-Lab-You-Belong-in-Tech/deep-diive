import Routers from "./app/routes/Routes";
import { isMobile } from 'react-device-detect';
import "./App.css";
import Mobile from "./app/pages/Mobile/Mobile";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalContext from "./app/context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GlobalContext>
      <ToastContainer theme="colored"/>
      <Router>
        {isMobile ? <Mobile/> : <Routers />}
      </Router>
    </GlobalContext>
  );
}

export default App;
