import React from "react";
import "./About.css";
import { Course } from "./Course";
import { AboutCourse } from "./AboutCourse";

export const About = () => {
  return (
    <div className="about">
      <Course />
      <AboutCourse />
    </div>
  );
};
