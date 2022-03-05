import { ClipLoader } from "react-spinners";
import loadingStyles from "./LoadingCard.module.css";

const LoadingCard = () => {
    return (
        <div className={loadingStyles.loader}>
            <ClipLoader color="black" size={120} />
            <p>Your Room Is Loading</p>
        </div>
    )
}

export default LoadingCard
