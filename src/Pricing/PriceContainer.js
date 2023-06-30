import React from "react";
import "./PriceContainer.css";

export const PriceContainer = () => {
  return (
    <div className="price-container">
      <div className="plan">
        <div className="plan-text">
          <h2>Choose your plan</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="plan-date">
          <span className="monthly">monthly</span>
          <span>yearly</span>
        </div>
      </div>
      <div className="price-cards">
        <div className="basic-plan">
          <div className="basic-plan-container">
            <div className="basic-plan-text">
              <h1>Basic Plan</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>

            <div className="pricing-container">
              <span className="price">$ 54</span>
              <span className="price-month">/month</span>
            </div>
            <div className="pricing-list">
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
            </div>

            <div className="price-btn">
              <button>Stat Free Trial</button>
            </div>
          </div>
        </div>
        <div className="premium-plan">
          <div className="premium-plan-container">
            <div className="premium-plan-text">
              <h1>Premium Plan</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>

            <div className="premium-pricing-container">
              <span className="premium-price">$ 54</span>
              <span className="premium-price-month">/month</span>
            </div>
            <div className="premium-pricing-list">
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
            </div>

            <div className="premium-price-btn">
              <button>Stat Free Trial</button>
            </div>
          </div>
        </div>
        <div className="basic-plan">
          <div className="basic-plan-container">
            <div className="basic-plan-text">
              <h1>Basic Plan</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>

            <div className="pricing-container">
              <span className="price">$ 54</span>
              <span className="price-month">/month</span>
            </div>
            <div className="pricing-list">
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
              <li>Free Access to video class</li>
            </div>

            <div className="price-btn">
              <button>Stat Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
