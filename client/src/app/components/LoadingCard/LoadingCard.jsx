import loadingStyles from "./LoadingCard.module.css";
import logo from "../../assets/logo_circle.png";

const LoadingCard = () => {
    return (
        <div className={loadingStyles.loader}>
            <img src={logo} alt="" className={loadingStyles.rotate}/>
            <p>Your Room Is Loading</p>
        </div>
    )
}

export default LoadingCard
