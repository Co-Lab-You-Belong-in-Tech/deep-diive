import React from "react";
// import socialStyle from "./SocialMedia.css"
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const SocialMedia = () => {
  return (
    <div>
      <FacebookShareButton
        url={"http://deepdiive.netlify.com/"}
        quote={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <img style={{ marginRight: "44px" }} src={facebook} alt="" />
      </FacebookShareButton>
      <TwitterShareButton
        url={"http://deepdiive.netlify.com/"}
        title={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <img style={{ marginRight: "44px" }} src={twitter} alt="" />
      </TwitterShareButton>
      <LinkedinShareButton
        url={"http://deepdiive.netlify.com/"}
        title={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <img src={linkedin} alt="" />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialMedia;
