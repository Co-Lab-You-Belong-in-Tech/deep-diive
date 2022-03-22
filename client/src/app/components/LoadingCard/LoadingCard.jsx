// import { ClipLoader } from "react-spinners";
import loadingStyles from "./LoadingCard.module.css";
import logo from "../../assets/logo_circle.png";

const LoadingCard = () => {
    return (
        // <div className={loadingStyles.loader}>
        //     <ClipLoader color="black" size={120} />
        //     <p>Your Room Is Loading</p>
        // </div>
        <div className={loadingStyles.loader}>
            <img src={logo} alt="" className={loadingStyles.rotate}/>
            <p>Your Room Is Loading</p>
        </div>
    )
}

export default LoadingCard
