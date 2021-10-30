import feedbackStyles from "./Feedback.module.css";
import React, { useState } from 'react';
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Navbar from "../../components/Navbar/Navbar";
import wave from "../../assets/wave_exit.png";
import figure from "../../assets/figure_exit.png"


const Feedback = () => {
    
    return (
 
        <div className={feedbackStyles.row}>
            
            <div className={feedbackStyles.column}>
                <div className={feedbackStyles.navDiv}>
                    <h1>logo</h1>
                </div>
                <img style={{width:"60%", 
                    height:"60%",
                    marginLeft:"165px",
                    marginTop:"160px"}}
                    src={figure} alt="image" />
            </div>
            <div className={feedbackStyles.column}>
            
                <h1>Hope you had fun, <br/> see you again soon!</h1>
                <button className={feedbackStyles.rbutton} onClick={() => {
                    window.open(
                        'https://dominicstephenson.typeform.com/to/rBdB04am?typeform-source=trello.com',
                        '_blank' 
                    );
                    }}>LEAVE A REVIEW
                </button>
                <hr />
                <h2>Tell your workmates <br/> about DeepDiive!</h2>
                <div className={feedbackStyles.social}>
                    <SocialMedia />
                </div>
            </div>
            <div className={feedbackStyles.column}>
                <img style={{height:"974px",
                    top:"-100", 
                    zIndex:"-1"}} 
                    src={wave} alt="image" />
            </div>
        </div>

    )
}

export default Feedback;
