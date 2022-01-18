import { useEffect } from "react";
import Routers from "./app/routes/Routes";
import { isMobile } from 'react-device-detect';
import "./App.css";
import Mobile from "./app/pages/Mobile/Mobile";
import {io} from "socket.io-client";

function App() {
  // const connect = () => {
  //   const socket = io("http://localhost:8080");
  //   return socket;
  // };

  // useEffect(() => {
  //   connect();
  // }, [])

  return (
    isMobile ? <Mobile/> : <Routers />
  );
}

export default App;
