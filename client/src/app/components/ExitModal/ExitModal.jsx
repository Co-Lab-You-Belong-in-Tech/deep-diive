import { Link } from "react-router-dom";
import exitStyles from "./ExitModal.module.css";

const ExitModal = () => {
    return (
        <div className={exitStyles.card}>
            <p>The other player has <br /> ended this session.</p>
            <Link to="/feedback">
                <button>Exit deepdiive</button>
            </Link>
        </div>
    )
}

export default ExitModal
