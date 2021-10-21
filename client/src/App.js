import { useState, useEffect } from "react";
import Routes from "./app/routes/Routes";
import { GameContext } from "./app/store/gameContext";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(`http://localhost:8080/links`);
      setUrl(data.gameId);
    };
    getUrl();
  }, []);

  return (
    <GameContext.Provider value={{ url }}>
      <Routes />
    </GameContext.Provider>
  );
}

export default App;
