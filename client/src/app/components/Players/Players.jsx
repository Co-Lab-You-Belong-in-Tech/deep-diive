import playerStyles from "./Players.module.css";

const Players = ({player}) => {
    return (
        <div className={playerStyles.players}>
            <div className={playerStyles.playerCard}>
                <p>{player}</p>
            </div>
            <div className={playerStyles.playerCard}>
                <p>Player</p>
            </div>
        </div>
    )
}

export default Players;
