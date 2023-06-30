import React from "react";
import Footer from "./Footer.css";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-polygon"></div>
      <div className="footer-text-container">
        <div className="footer-text">
          <h2>We have what you're looking for </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
        </div>
        <div className="footer-btn">
          <button>Get Started Now</button>
        </div>
      </div>
      <div className="footer-container">
        <p>All Right Reserved @Copyright 2023</p>
        <div className="footer-policies">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Product</li>
        </div>
        <div className="footer-social-media">
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};
