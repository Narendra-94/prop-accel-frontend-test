import React from "react";
import everyoneSmiling from "../images/employers-smiling.jpg";
import employersSmiling from "../images/everyone-smiling.jpg";
import Vector from "../images/Vector.svg";
import Group from "../images/Group.svg";
import { Ellipse } from "../Content/Ellipse";
import "./ContentDetails.css";

export const ContentDetails = () => {
  return (
    <div className="content-container">
      <div className="content-details">
        <h1 className="content-details-header">
          Learn how to launch a successful podcast
        </h1>

        <p className="content-details-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting in
          ustry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="content-details-btn">
          <button>Sign up Now</button>
        </div>
      </div>

      <div className="content-image">
        <div className="everyone-smiling">
          <img src={everyoneSmiling} alt="" />
        </div>
        <div className="employers-smiling">
          <img src={employersSmiling} alt="" />
        </div>
      </div>

      <div className="vector">
        <img src={Vector} alt="" />
      </div>

      <div className="group">
        <img src={Group} alt="" />
      </div>
      <Ellipse />
    </div>
  );
};
