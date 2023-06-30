import React from "react";
import slide from "../images/slide.svg";
import grey from "../images/grey-slide.svg";

import "./Slide.css";

export const Slide = () => {
  return (
    <div className="slider">
      <img src={slide} alt="" className="vector-1" />
      <img src={grey} alt="" className="vector-2" />
      <img src={grey} alt="" className="vector-3" />
      <img src={grey} alt="" className="vector-4" />
    </div>
  );
};
