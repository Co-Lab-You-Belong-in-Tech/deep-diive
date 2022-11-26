import React from "react";
// import socialStyle from "./SocialMedia.css"
import { FacebookIcon, TwitterIcon, LinkedInIcon } from "../../assets/svgs";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const SocialMedia = () => {
  return (
    <div style={{ display: "flex", gap: "3rem" }}>
      <FacebookShareButton
        url={"http://deepdiive.netlify.com/"}
        quote={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton
        url={"http://deepdiive.netlify.com/"}
        title={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <TwitterIcon />
      </TwitterShareButton>
      <LinkedinShareButton
        url={"http://deepdiive.netlify.com/"}
        title={
          "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
        }
        hashtag="#DeepDiive"
      >
        <LinkedInIcon />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialMedia;
