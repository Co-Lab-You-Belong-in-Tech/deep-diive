import React from 'react';
import { ArrowForwardIos } from "@material-ui/icons";

export const NextArrowBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "#393E4D", fontSize: "35px" }} />
      </div>
    );
  };
