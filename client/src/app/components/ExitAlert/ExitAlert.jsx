import { Link } from "react-router-dom";
import exitStyles from "./ExitAlert.module.css";

const ExitAlert = () => {
    return (
        <div className={exitStyles.card}>
            <p>The other player has <br /> ended this session.</p>
            <Link to="/feedback">
                <button>Exit deepdiive</button>
            </Link>
        </div>
    )
}

export default ExitAlert
