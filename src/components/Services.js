import React from "react";
import services from "../images/services.jpg";
export default function Services() {
  return (
    <div className="services" id="services">
      <div className="special-head">
        <h1>Services</h1>
        <p>Don't be busy,be productive</p>
      </div>
      <div className="container">
        <div className="perant-services">
          <div className="col">
            <div className="srv">
              <i className="fas fa-palette fa-2x"></i>

              <div className="child">
                <h2>Graphic Design</h2>
                <p>
                  Graphic design is the process of visual communication and
                  problem solving using one or more of typography, photography
                  and illustration.
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fab fa-sketch fa-2x"></i>

              <div className="child">
                <h2>Graphic Design</h2>
                <p>
                  Graphic design is the process of visual communication and
                  problem solving using one or more of typography, photography
                  and illustration.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <i className="fab fa-sketch fa-2x"></i>

              <div className="child">
                <h2>Graphic Design</h2>
                <p>
                  Graphic design is the process of visual communication and
                  problem solving using one or more of typography, photography
                  and illustration.
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fas fa-vector-square fa-2x"></i>

              <div className="child">
                <h2>Graphic Design</h2>
                <p>
                  Graphic design is the process of visual communication and
                  problem solving using one or more of typography, photography
                  and illustration.
                </p>
              </div>
            </div>
          </div>

          <div className="col image-column">
            <div className="right-image ">
              <img src={services} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
