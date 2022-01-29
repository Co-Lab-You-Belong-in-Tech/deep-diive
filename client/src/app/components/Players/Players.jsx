import playerStyles from "./Players.module.css";

const Players = ({ host, guest }) => {
  return (
    <div className={playerStyles.players}>
      <div className={playerStyles.playerCard}>
        <p>{host}</p>
      </div>
      <div className={playerStyles.playerCard}>
        <p>{guest || "player"}</p>
      </div>
    </div>
  );
};

export default Players;
