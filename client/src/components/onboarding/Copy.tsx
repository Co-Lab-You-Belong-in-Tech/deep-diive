// core
import React, { useRef, useState } from "react";

// styles
import onboardingStyles from "../../app/onboarding/Onboarding.module.css";

export const Copy = ({ copyText }: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("url_link", copyText);
  }

  const text = useRef<any>(null);
  const [isCopied, setIsCopied] = useState(false);

  function copyClipboard(event: any) {
    text.current.select();
    document.execCommand("copy");
    event.target.focus();
    setIsCopied(true);
    // setIsCopied("Copied!");
  }

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
