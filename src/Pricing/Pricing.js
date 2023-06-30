import React from "react";
import "./Pricing.css";
import { PriceContainer } from "./PriceContainer";

export const Pricing = () => {
  return (
    <div className="pricing">
      <div>
        <div className="pricing-background">
          <>
            <div className="line-1"></div>
          </>

          <div className="podcast">
            <p>Podcast</p>
          </div>
        </div>
      </div>

      <PriceContainer />
    </div>
  );
};
