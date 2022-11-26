import loadingStyles from "./LoadingCard.module.css";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";

const LoadingCard = () => {
  return (
    <div className={loadingStyles.loader}>
      <img
        className={loadingStyles.rotate}
        src={DEEPDIIVE_IMAGES.logoIcon}
        alt="deepdiive logo"
      />
      <p>Your Room Is Loading</p>
    </div>
  );
};

export default LoadingCard;
