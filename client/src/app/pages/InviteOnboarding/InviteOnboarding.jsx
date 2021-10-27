import { useState } from "react";
import logo from "../../assets/logo.svg";
import image from "../../assets/Landing_Page_png.png";
import invitedStyles from "./InviteOnboarding.module.css";

const InviteOnboarding = () => {
    const [user, setUser] = useState("");

    const name = localStorage.getItem("name");

    const addUser = (event) => {
      event.preventDefault();
      const newPlayer = event.target.value;
  
      localStorage.setItem("newPlayer", newPlayer);
      setUser({ newPlayer });
    };
    console.log(user);
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
          <form className={invitedStyles.form} onSubmit={addUser}>
            <label>Name</label>
                <input type="text" onChange={ addUser }/>
            <button>Let’s Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InviteOnboarding;
