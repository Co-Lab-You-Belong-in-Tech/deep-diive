import styles from "./Preloader.module.css";
import logo from "../../assets/logo_circle.png";

const Preloader = () => {    

  return (
    <div className={styles.preloader}>
        <img src={logo} alt="" className={styles.rotate}/>
    </div>
  )
}


export default Preloader;