import { useEffect, useRef, useState } from "react";

import deepdiiveApi from "api/deepdiiveApi";
import { useToggleModalStore } from "store/modals";

export const useOnboardingHook = ({ copyText }: any) => {
  // state values
  const [gameId, setGameId] = useState<any>("");
  const [isCopied, setIsCopied] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const text = useRef<any>(null);

  // hooks
  const { modalIsOpen } = useToggleModalStore();

  // storage
  localStorage.setItem("url_link", copyText);

  const username = localStorage.getItem("deepdiive_host");

  // lifecycle
  useEffect(() => {
    const res = async () => {
      if (gameId) {
        const { data }: any = await deepdiiveApi.post(`/links/join/${gameId}`, {
          username: username,
        });
        return data;
      }
    };
    res();
  }, [username, gameId]);

  useEffect(() => {
    const getUrl = async () => {
      const { data }: any = await deepdiiveApi.get(`/links`);
      setGameId(data.gameId);
      console.log(data);
    };
    getUrl();
  }, []);

  // functions
  function copyClipboard(event: any) {
    text.current.select();
    document.execCommand("copy");
    event.target.focus();
    setIsCopied(true);
    // setIsCopied("Copied!");
  }

  return {
    // state values
    text,
    gameId,
    isCopied,
    modalIsOpen,
    currentSlide,

    // functions
    copyClipboard,
    setCurrentSlide,
  };
};
