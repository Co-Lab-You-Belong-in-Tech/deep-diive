"use client";
import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

//Slide show buttons
export const PreviousBtn: React.FC<any> = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "#393E4D", fontSize: "35px" }} />
      </div>
    );
  };
  export const NextBtn: React.FC<any> = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "#393E4D", fontSize: "35px" }} />
      </div>
    );
  };