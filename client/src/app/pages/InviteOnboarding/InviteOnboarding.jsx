import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import image from "../../assets/Landing_Page_png.png";
import invitedStyles from "./InviteOnboarding.module.css";
import chromeIcon from "../../assets/chrome.svg";
import deepdiiveApi from "../../api/deepdiiveApi";

const InviteOnboarding = () => {
  const [user, setUser] = useState("");
  const { gameId } = useParams();

  const username = localStorage.getItem("deepdiive_host");

  // useEffect(() => {
  //   const res = async () => {
  //     const { data } = await deepdiiveApi.post(
  //       `/links/join/${gameId}`,
  //       { username: username }
  //     );
  //     console.log(data.player);
  //     return data;
  //   };
  //   res();
  // }, [gameId, username]);

  const changeHandler = (e) => {
    const deepdiive_guests = e.target.value;

    localStorage.setItem("deepdiive_guests", deepdiive_guests);
    setUser(deepdiive_guests);
    console.log(user);
  };

  return (
    <div className={invitedStyles.invite}>
      <nav>
        <div className={invitedStyles.logoDiv}>
          <img className={invitedStyles.icon} src={logoIcon} alt="" />
          <img src={logo} alt="" />
        </div>
      </nav>
      <div className={invitedStyles.grid}>
        <img src={image} alt="" />
        <div>
          <div className={invitedStyles.title}>
            <span>
              Ride the Wave of <br />
            </span>
            <span>Better Conversations</span>
          </div>
          <p>
            Unwind with workmates and have meaningful conversations using our virtual card deck. 
            Take turns answering questions from the selected cards 
            <span className={invitedStyles.highlight}> alongside your favorite video chat platform.</span>
          </p>
          <p className={invitedStyles.chrome}>Best Experience with 
            <span className={invitedStyles.highlight}> Google Chrome </span> <img src={chromeIcon} alt="chrome" /></p>
          <p>Enter your name below to get started!</p>
          <form className={invitedStyles.form}>
            <label>Name</label>
            <input type="text" value={user} onChange={changeHandler} />
            <Link to={`/v1/instruction/invite/${gameId}`}>
              <button>Let’s Go!</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteOnboarding;
