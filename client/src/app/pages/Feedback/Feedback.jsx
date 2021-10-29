import feedbackStyles from "./Feedback.module.css";
import React, { useState } from 'react';
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Navbar from "../../components/Navbar/Navbar";
import wave from "../../assets/wave_exit.png";
import figure from "../../assets/figure_exit.png"


const Feedback = () => {
    
    return (
        <div>
        <div className={feedbackStyles.navDiv}>
            <h1>logo</h1>
        </div>

        <div className={feedbackStyles.row}>
            <div className={feedbackStyles.column}>
                <img src={figure} alt="image" />
            </div>
            <div className={feedbackStyles.column}>
            
                <h1>Great job connecting, <br/>
                see you again soon!</h1>
                <button className={feedbackStyles.button} onClick={() => {
                    window.open(
                        'https://dominicstephenson.typeform.com/to/rBdB04am?typeform-source=trello.com',
                        '_blank' 
                    );
                    }}>Feedback
                </button>
                <hr />
                <h2>Share DeepDiive with  <br/>
                your friends and colleagues</h2>
                <div className={feedbackStyles.social}>
                    <SocialMedia />
                </div>
            </div>
            <div className={feedbackStyles.column}>
                <img src={wave} alt="image" />
            </div>
        </div>
        </div>
    )
}

export default Feedback;
