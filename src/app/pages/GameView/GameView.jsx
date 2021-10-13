import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Players from "../../components/Players/Players";
import gameStyles from "./GameView.module.css";

const GameView = () => {
    return (
        
            <div className={gameStyles.gameDiv}>
            <div className={gameStyles.navDiv}>
                <Navbar />
            </div>
            <div className={gameStyles.cardDiv}>
                <Card />
            </div>
            <div className={gameStyles.playerDiv}>
                <Players />
            </div>
            </div>
         
    )
}

export default GameView;
