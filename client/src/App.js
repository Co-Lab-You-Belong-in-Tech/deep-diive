import Routes from "./app/routes/Routes";
import { isMobile } from 'react-device-detect';
import "./App.css";
import Mobile from "./app/pages/Mobile/Mobile";

function App() {
  return (
    isMobile ? <Mobile/> : <Routes />
  );
}

export default App;
