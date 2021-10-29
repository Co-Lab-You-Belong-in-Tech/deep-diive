// import { useState, useEffect } from "react";
import Routes from "./app/routes/Routes";
// import { GameContext } from "./app/store/gameContext";
// import axios from "axios";
// import { io } from "socket.io-client";
import "./App.css";

function App() {
  // const [url, setUrl] = useState("");

  // useEffect(() => {
  // const startGame = async () => {
  //   const { data } = await axios.post(
  //     `http://localhost:8080/links/join/${createUrl}`
  //   );
  //   setUrl(data.gameId);
  // };
  // }, []);

  return (
    // <GameContext.Provider value={{ url }}>
    <Routes />
    // </GameContext.Provider>
  );
}

export default App;
