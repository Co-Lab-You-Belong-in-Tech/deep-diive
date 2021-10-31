import playerStyles from "./Players.module.css";

const Players = ({ host }) => {
  return (
    <div className={playerStyles.players}>
      <div className={playerStyles.playerCard}>
        <p>{host}</p>
      </div>
      <div className={playerStyles.playerCard}>
        {/* <p>{invitedPlayer}</p> */}
        <p>player</p>
      </div>
    </div>
  );
};

export default Players;
