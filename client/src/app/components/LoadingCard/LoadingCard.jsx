import loadingStyles from "./LoadingCard.module.css";
import loader from "../../assets/gifs/loader.gif";

const LoadingCard = () => {
    return (
            <div className={loadingStyles.card}>
                <img src={loader} alt="loader" />
                <p>Your Room Is Loading</p>
            </div>
    )
}

export default LoadingCard
