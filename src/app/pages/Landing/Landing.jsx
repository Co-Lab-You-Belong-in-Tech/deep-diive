import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import image from "../../assets/image_alt.svg";
import logo from "../../assets/logo.svg";
import "./Landing.css";

//const nameList = [];

class Landing extends React.Component {
    constructor() {
      super();
      this.state = {
        name: ""
      };
    }
  
    onChange = event => {
      const name = event.target.value;
  
      localStorage.setItem("name", name);
      this.setState({ name });
    };
  
    render() {
      return (
        <div className="row">
        <div className="column"><img src={image} alt="image" id="image"/></div>
        <div className="column">
            <img src={logo} alt="logo" id="logo"/>
            <h1>Not your average ice breaker.</h1>
            <p>Unwind with your coworkers and get to know each other. 
                Take turns selecting cards to unplug from work and connect as humans.</p>
            <p>Enter your name below to get started!</p>
            <hr />
            <form id="form">
                
                <input value={this.state.name} placeholder="Your name" id="name" onChange={this.onChange}/>
                <button ><Link to="./Onboarding">Let's Go!</Link></button>
            </form>
            </div>
        </div>
      )
    }
}

//ReactDOM.render(Landing, document.getElementById("App"));




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

export default Landing;
