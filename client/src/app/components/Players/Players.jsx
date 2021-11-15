import playerStyles from "./Players.module.css";

const Players = ({ host }) => {
  const deepdiive_guest = localStorage.getItem("deepdiive_guest");
  return (
    <div className={playerStyles.players}>
      <div className={playerStyles.playerCard}>
        <p>{host}</p>
      </div>
      <div className={playerStyles.playerCard}>
        {/* <p>{invitedPlayer}</p> */}
        <p>{deepdiive_guest || "player"}</p>
      </div>
    </div>
  );
};

export default Players;
