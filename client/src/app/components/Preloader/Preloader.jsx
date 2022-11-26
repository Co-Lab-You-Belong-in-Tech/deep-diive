import styles from "./Preloader.module.css";
import { DEEPDIIVE_IMAGES } from "../../constants/gallery";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img
        className={styles.rotate}
        src={DEEPDIIVE_IMAGES.logoIcon}
        alt="deepdiive logo"
      />
    </div>
  );
};

export default Preloader;
