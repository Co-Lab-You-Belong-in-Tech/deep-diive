import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import image from "../../assets/Landing_Page_png.png";
import invitedStyles from "./InviteOnboarding.module.css";

const InviteOnboarding = () => {
  const [user, setUser] = useState("");
  const [gameId, setGameId] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(
        `http://deepdiive.herokuapp.com/api/links`
      );
      setGameId(data.gameId);
    };
    getUrl();
  }, []);

  const addUser = (event) => {
    event.preventDefault();
    const newPlayer = event.target.value;

    localStorage.setItem("newPlayer", newPlayer);
    setUser(newPlayer);
    console.log({ newPlayer });
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
            This is not your average ice breaker. Unwind with workmates and have
            meaningful conversations using our virtual card deck. Take turns
            answering questions from the cards you select alongside your
            favorite video chat platform.
          </p>
          <p>Enter your name below to get started!</p>
          <form
            className={invitedStyles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <label>Name</label>
            <input type="text" value={user} onChange={addUser} />
            <Link to={`/game/${gameId}`}>
              <button>Let’s Go!</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteOnboarding;
