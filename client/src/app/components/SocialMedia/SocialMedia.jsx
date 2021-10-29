import React from "react";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton
    } from 'react-share';

const SocialMedia = () => {

    return (
        <div>
            <FacebookShareButton 
                url={"http://localhost:3000/feedback"}
                quote={"DeepDiive - Ride the wave of better conversation"}
                hashtag="#DeepDiive"
                >
                <img src={facebook}/>
            </FacebookShareButton>
            <TwitterShareButton 
                url={"http://localhost:3000/feedback"}
                quote={"DeepDiive - Ride the wave of better conversation"}
                hashtag="#DeepDiive"
                >
                <img src={twitter}/>
            </TwitterShareButton>
            <LinkedinShareButton 
                url={"http://localhost:3000/feedback"}
                quote={"DeepDiive - Ride the wave of better conversation"}
                hashtag="#DeepDiive"
                >
                <img src={linkedin}/>
            </LinkedinShareButton>
        </div>
        
        
    );
}

export default SocialMedia
