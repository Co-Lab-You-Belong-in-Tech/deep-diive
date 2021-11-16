import playerStyles from "./Players.module.css";

const Players = ({ host }) => {
  const deepdiive_guests = localStorage.getItem("deepdiive_guests");
  return (
    <div className={playerStyles.players}>
      <div className={playerStyles.playerCard}>
        <p>{host}</p>
      </div>
      <div className={playerStyles.playerCard}>
        {/* <p>{invitedPlayer}</p> */}
        <p>{deepdiive_guests || "player"}</p>
      </div>
    </div>
  );
};

export default Players;
