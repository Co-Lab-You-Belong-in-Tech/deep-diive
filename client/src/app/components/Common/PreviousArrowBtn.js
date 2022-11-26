import React from "react";
import { ArrowBackIos } from "@material-ui/icons";

export const PreviousArrowBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#393E4D", fontSize: "35px" }} />
    </div>
  );
};
