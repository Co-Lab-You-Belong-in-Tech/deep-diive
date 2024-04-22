import React from "react";
import { SOCIAL_MEDIA_DATA } from "data/socials.data";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.social_icons}>
      {SOCIAL_MEDIA_DATA.map(({ id, SocialButton, Icon }) => (
        <SocialButton
          key={id}
          url={"http://deepdiive.netlify.com/"}
          quote={
            "Hey! I just used DeepDiive to boost my 1:1 today. 🚀 It’s the new conversations card deck game for workmates that focuses on sparking more meaningful chats. Highly recommended! 🙌 Go check them out here: "
          }
          hashtag="#DeepDiive"
        >
          <Icon round={true} size={40} bgStyle={{ fill: "#000" }} />
        </SocialButton>
      ))}
    </div>
  );
};

export default SocialMedia;
