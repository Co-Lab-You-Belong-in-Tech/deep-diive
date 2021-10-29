import React from 'react';
import { Link, Route} from 'react-router-dom';
import image from "../../assets/Landing_Page_png.png";
import logo from "../../assets/logo_circle.png";
import deepdive from "../../assets/deepdive.svg";
import landingStyles from "./Landing.module.css";

//const nameList = [];

// function Redir() {
//   let history = useHistory();

//   const redirect = () => {
//     history.push('/Onboard')
//   }

//   return (
//     <div>
//       <button onClick={redirect}>Let's Go!</button>
//     </div>
//   )
// }

export default class Landing extends React.Component {
    constructor() {
      super();
      this.state = {
        name: ""
      };
    }
  
    onChange = event => {
      event.preventDefault();
      const name = event.target.value;
  
      localStorage.setItem("name", name);
      this.setState({ name });
    };
  
    render() {
      return ( 
        <div className={landingStyles.landing}>
        <div className={landingStyles.navbar}>
            <img style={{width:"70px", height:"70px"}} src={logo} alt="logo" />
            <img src={deepdive} alt="deepdive" />
            <h2>ride the wave of better conversation </h2>
        </div>
        <div>

        </div>

        <div className={landingStyles.row}>
        <div className={landingStyles.column}>
          <img style={{width:"464.06px", height:"426.68px", marginLeft:"80px"}} src={image} alt={image} />
        </div>
        <div className={landingStyles.column}>

            <h1 style={{textAlign:"left"}}><span>Not your average ice breaker.</span></h1>
            
            <p>Unwind with coworkers and get to know each other through meaningful conversation. 
              Take turns selecting questions cards from our deck to unplug from work and connect 
              as humans. Enter your name below to get started!</p>
            <p>Enter your name below to get started!</p>
            <hr />
            <form id="form" className={landingStyles.form}>
                <input value={this.state.name} placeholder="Your name" id="name" onChange={this.onChange}/>
                <Route>
                  <Link to="/onboarding"><button className={landingStyles.button}>Let's Go!</button></Link>
                </Route>
            </form>
            </div>
        </div>

        </div>
      )
    }
}



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

