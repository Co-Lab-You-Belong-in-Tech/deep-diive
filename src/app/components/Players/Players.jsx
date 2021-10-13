import profile from "../../assets/profile-icon.svg";
import playerStyles from "./Players.module.css";

const Players = () => {
    return (
        <div className={playerStyles.players}>
            <div className={playerStyles.playerCard}>
                <img src={profile} alt="" />
                <p>Jack</p>
            </div>
            <div className={playerStyles.playerCard}>
                <img src={profile} alt="" />
                <p>Jill</p>
            </div>
        </div>
    )
}

export default Players;
