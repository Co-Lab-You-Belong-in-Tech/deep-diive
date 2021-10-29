import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import logo from "../../assets/logo.svg";
import image from "../../assets/Landing_Page_png.png";
import invitedStyles from "./InviteOnboarding.module.css";

const InviteOnboarding = () => {
    const [user, setUser] = useState("");
    const [gameId, setGameId] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      const { data } = await axios.get(`http://localhost:8080/links`);
      setGameId(data.gameId);
    };
    getUrl();
  }, []);

    const name = localStorage.getItem("name");

    const addUser = (event) => {
      event.preventDefault();
      const newPlayer = event.target.value;
  
      localStorage.setItem("newPlayer", newPlayer);
      setUser(newPlayer);
      console.log({newPlayer});
    };
  return (
    <div className={invitedStyles.invite}>
      <nav>
        <img src={logo} alt="" />
      </nav>
      <div className={invitedStyles.grid}>
        <img src={image} alt="" />
        <div>
          <div className={invitedStyles.title}>
            <span>
              {name ? name : "Jack"} invited you to <br />
            </span>
            <span>take a deep dive!</span>
          </div>
          <p>
            Unwind with coworkers and get to know each other through meaningful
            conversation. Take turns selecting questions cards from our deck to
            unplug from work and connect as humans.
          </p>
          <p>Enter your name below to get started!</p>
          <form className={invitedStyles.form} onSubmit={(e) => e.preventDefault()}>
            <label>Name</label>
                <input type="text" value={user} onChange={addUser}/>
            <Link to={`/game/${gameId}`}><button>Let’s Go!</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteOnboarding;
