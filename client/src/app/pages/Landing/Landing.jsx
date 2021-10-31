import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/Landing_Page_png.png";
import logo from "../../assets/new-logo.svg";
import logoIcon from "../../assets/logo_circle.png";
import landingStyles from "./Landing.module.css";

const Landing = () => {
  const [user, setUser] = useState("");
  // const [host, setHost] = useState("");
  // const { gameId } = useParams();

  // useEffect(() => {
  //   const res = async () => {
  //     const { data } = await axios.post(
  //       `https://deepdiive.herokuapp.com/api/links/join/${gameId}`,
  //       { username: host }
  //     );
  //     console.log(data);
  //     return data;
  //   };
  //   res();
  // }, [gameId, host]);

  const changeHandler = (e) => {
    const name = e.target.value;

    localStorage.setItem("name", name);
    setUser(name);
    console.log(user);
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.post(
  //     `https://deepdiive.herokuapp.com/api/links/join/${gameId}`,
  //     { username: host }
  //   );
  //   console.log(data);
  //   return data;
  // };

  return (
    <div className={landingStyles.landing}>
      <nav>
        <div className={landingStyles.logoDiv}>
          <img className={landingStyles.icon} src={logoIcon} alt="" />
          <img src={logo} alt="" />
        </div>
      </nav>

      <div className={landingStyles.grid}>
        <img src={image} alt="" />
        <div>
          <div className={landingStyles.title}>
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
          <form className={landingStyles.form}>
            <label>Name</label>
            <input
              value={user}
              placeholder="Your name"
              id="name"
              onChange={changeHandler}
            />
            <Link to="/onboarding">
              <button>Let’s Go!</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;

// const AddName = (evnt) => {
//     evnt.preventDefault();
//     const name = {
//         id: Date.now(),
//         name: document.getElementById('name').value
//     };
//     nameList.push(name);
//     document.forms(0).reset(); //document.querySelector('form').reset()

//     localStorage.setItem('MyMovieList', JSON.stringify(nameList) );

// }
// const Submit = () => {
//     return (
//         <form id="form">
//             <input id="name" placeholder="Your name"/>
//             <button onClick={<AddName />}>Let's Go!</button>
//         </form>
//     )
// }
//////////////
// const Submit = () => {

//     const newName = () => (window.localStorage.getItem('name') || "");
//     const [name, setName] = useState(newName);
//     const names = {
//         id: Date.now(),
//         name: document.getElementById('name').value
//     };
//     const addName = () => {
//         nameList.push(names);
//         document.forms(0).reset();
//     }
//     useEffect( () => {
//         window.localStorage.setItem('name', name)
//     }, [name] )

//     return(
//         <button onClick={addName}>Let's Go!</button>
//     )
// }

// const Landing = () => {
//     return(
//         <div className="row">
//             <div className="column"><img src={image} alt="image" id="image"/></div>
//             <div className="column">
//                 <img src={logo} alt="logo" id="logo"/>
//                 <h1>Not your average ice breaker.</h1>
//                 <p>Unwind with your coworkers and get to know each other.
//                     Take turns selecting cards to unplug from work and connect as humans.</p>
//                 <p>Enter your name below to get started!</p>
//                 <hr />
//                 <form id="form">
//                     <input name="n" id="name" placeholder="Your name" />
//                     <Submit />
//                 </form>
//             </div>
//         </div>
//     )
// }
