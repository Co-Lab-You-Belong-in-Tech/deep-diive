import playerStyles from "./Players.module.css";
// import {userIsGuest} from "../../helpers/utils";

const Players = ({ host, guest }: any) => {

  // console.log(userIsGuest(guest));
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
