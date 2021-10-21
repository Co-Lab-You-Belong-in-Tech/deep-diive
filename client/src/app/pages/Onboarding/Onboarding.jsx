import {useState, useContext} from 'react';
import { Link, Route} from 'react-router-dom';
import { GameContext } from "../../store/gameContext";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import image from "../../assets/image_onboard.svg";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import onboardingStyles from "./Onboarding.module.css";
//import {CopyToClipboard} from 'react-copy-to-clipboard';


//Slide show buttons
const PreviousBtn = (props) => {
    console.log(props);
    const {className, onClick} = props;
    return(
        <div className= {className} onClick={onClick}>
            <ArrowBackIos style={{color: "#C3CBCD", fontSize: "32px"}}/>
        </div>
    )
}
const NextBtn = (props) => {
    const {className, onClick} = props;
    return(
        <div className= {className} onClick={onClick}>
            <ArrowForwardIos style={{color: "#C3CBCD", fontSize: "32px"}}/>
        </div>
    )
}

//Shareable link (temporary)
const Copy = ({ copyText }) => {
    const [isCopied, setIsCopied] = useState(false);  
    
    return (
      <div className={onboardingStyles.div}>
        <input type="text" value={copyText} readOnly />
        <button className={onboardingStyles.button}>
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    );
  }

  
//Slide show
const Onboarding = () => {
    return (
        <div className={onboardingStyles.slide}>
            <Slider 
                prevArrow={<PreviousBtn />} 
                nextArrow={<NextBtn />}
                dots infinite={false} edgeFriction={0}
            >
                <Card1 />
                <Card2 />
                <Card3 />
            </Slider>
        </div>
    )
}

//Each slide
const Card1 = () => {
    const name = localStorage.getItem('name');
    const {url} = useContext(GameContext);
    console.log(url)

    return (
        <div className={onboardingStyles.view}>
            <img src={image} alt="onbaording"/>
            <h1>Nice to meet you, {name}! Here's how you play:</h1>
            <p>First, invite your friends through the sharable link below!</p>
            <p>{ url }</p>
            <div>
                <Copy copyText= {`http://localhost:3002/game/${url}`} />
            </div>
        </div>
    )
}

const Card2 = () => {
    return(
        <div className={onboardingStyles.view}>
            <img src={image} alt="onbaording"/>
            <h1>Once your friends arrive, take turns picking cards and asking the questions on them.</h1>
            <p>Use this time switched off from work to get to know your colleagues as more than just your coworkers.</p>
        </div>
    )
}

const Card3 = () => {
    const {url} = useContext(GameContext);
    return(
        <div className={onboardingStyles.view}>
            <img src={image} alt="onbaording"/>
            <h1>When you all feel recharged and connected, you can exit the game.</h1>
            <p>Return to your work refreshed and more bonded than ever. 
                (And don't worry! We'll always be here when you want to unplug again.)
            </p>
            <hr />
            <Route>
                <Link to={`/game/${url}`}><button className={onboardingStyles.readyButton}> I'm ready!</button></Link>
            </Route>
            
        </div>
    )
}

export default Onboarding;
