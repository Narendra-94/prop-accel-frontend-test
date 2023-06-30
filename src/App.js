import React from "react";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Content } from "./Content/Content";
import { About } from "./About/About";
import { Pricing } from "./Pricing/Pricing";
import { Review } from "./Review/Review";
import { AppFooter } from "./AppFooter/AppFooter";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <About />
      <Pricing />
      <Review />
      <AppFooter />
    </div>
  );
};
