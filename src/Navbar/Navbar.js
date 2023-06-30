import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-logo">
          <p>Logo</p>
        </div>
        <div className="navbar-container-menu ">
          <li>About </li>
          <li>Pricing </li>
          <li>Review</li>
        </div>
      </div>
    </div>
  );
};
