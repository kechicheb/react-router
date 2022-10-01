import React from "react";
import portfolioOne from "../images/portfolio1.png";
import portfolioTwo from "../images/portfolio2.jpg";
import portfolioThree from "../images/portfolio3.jpg";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="special-head">
          <h1>Portfolio</h1>
          <p>if you do it right, it will last forever</p>
        </div>
        <div className="portfolio-content">
          <div className="portfo">
            <img src={portfolioOne} alt="" />
            <div className="text">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div className="portfo">
            <img src={portfolioTwo} alt="" />
            <div className="text">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div className="portfo">
            <img src={portfolioThree} alt="" />
            <div className="text">
              <h3>Project Here</h3>
              <p>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
