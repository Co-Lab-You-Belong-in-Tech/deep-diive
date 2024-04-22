import React, { useRef, useState } from 'react';

import onboardingStyles from "../../app/onboarding/Onboarding.module.css";
import { useOnboardingHook } from 'hooks';

export const Copy = ({ copyText }: any) => {
    const {
        // state values
        text,
        isCopied,
        
        // functions
        copyClipboard,
      } = useOnboardingHook({copyText});
  
    return (
      <div className={onboardingStyles.copy_div}>
        <input ref={text} type="text" value={copyText} readOnly />
        <button onClick={copyClipboard} className={onboardingStyles.cbutton}>
          Copy
        </button>{" "}
        {isCopied}
      </div>
    );
  };
