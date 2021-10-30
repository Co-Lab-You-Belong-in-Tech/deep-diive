import playerStyles from "./Players.module.css";

const Players = ({ player, invitedPlayer }) => {
  return (
    <div className={playerStyles.players}>
      <div className={playerStyles.playerCard}>
        <p>{player}</p>
      </div>
      <div className={playerStyles.playerCard}>
        <p>{invitedPlayer}</p>
      </div>
    </div>
  );
};

export default Players;
