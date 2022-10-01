import React from "react";
import about from "../images/about.jpg";
import Contact from "./Contact";
export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="special-head">
            <h1>About</h1>
            <p>Less is more work</p>
          </div>
          <div className="about-content">
            <div className="col-1">
              <img src={about} alt="" />
            </div>
            <div className="col-2">
              <div className="first-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit dolores, sed mollitia quas, nisi blanditiis
                  perspiciatis excepturi quisquam odit eos repellendus quasi
                  iure, inventore amet ut sapiente aspernatur provident neque?
                </p>
              </div>
              <div className="secound-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente inventore aspernatur dolorem sunt modi
                  exercitationem, pariatur, qui maxime a consectetur distinctio
                  vero voluptatem eius eligendi aperiam dolor. Voluptatibus,
                  maiores dicta?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
