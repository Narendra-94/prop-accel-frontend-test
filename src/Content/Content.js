import React from "react";
import "./Content.css";
import { ContentDetails } from "./ContentDetails";
import mic from "../images/mic.png";

export const Content = () => {
  return (
    <div className="content">
      <div className="polygon2"></div>
      <div className="circle"></div>
      <div className="polygon1"></div>
      <div className="mic">
        <img src={mic} alt="" />
      </div>

      <ContentDetails />
    </div>
  );
};
