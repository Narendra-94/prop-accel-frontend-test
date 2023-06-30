import React from "react";
import "./Review.css";
import Lolla from "../images/Lolla.png";
import Star from "../images/star.svg";
import Arrow from "../images/arrow.svg";
import React from "react";
import "./Review.css";
import Lolla from "../images/Lolla.png";
import { Slide } from "./Slide";

export const Review = () => {
  return (
    <>
      <div className="review">
        <div className="customer-review">
          <div className="customer-review-text">
            <h1>Review from Customers</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </div>
          <div className="customers">
            <div className="customers-content">
              <div className="customers-profile">
                <div className="profile">
                  <div className="profile-img">
                    <img src={Lolla} alt="" />
                  </div>
                  <div className="profile-details">
                    <div className="profile-details-text">
                      <p className="name">Lolla Smith</p>
                      <p className="company">Microsoft</p>
                    </div>
                    <div className="star">
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make
                </p>
              </div>
            </div>
            <div className="customers-content">
              <div className="customers-profile">
                <div className="profile">
                  <div className="profile-img">
                    <img src={Lolla} alt="" />
                  </div>
                  <div className="profile-details">
                    <div className="profile-details-text">
                      <p className="name">Lolla Smith</p>
                      <p className="company">Microsoft</p>
                    </div>
                    <div className="star">
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make
                </p>
              </div>
            </div>
            <div className="customers-content">
              <div className="customers-profile">
                <div className="profile">
                  <div className="profile-img">
                    <img src={Lolla} alt="" />
                  </div>
                  <div className="profile-details">
                    <div className="profile-details-text">
                      <p className="name">Lolla Smith</p>
                      <p className="company">Microsoft</p>
                    </div>
                    <div className="star">
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make
                </p>
              </div>
            </div>
            <div className="arrow-btn">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <Slide />
      </div>
    </>
  );
};
