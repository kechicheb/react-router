import React from "react";
import { WavyLink } from "react-wavy-transitions";

import logo from "../images/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="" />

        <div className="links">
          <div className="icon" onClick={() => nav()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="links">
            <li>
              <WavyLink color="#10cab7" to="/">Home</WavyLink >
            </li>
            <li>
              <WavyLink color="#10cab7"  to="/Services">Services</WavyLink >
            </li>
            <li>
              <WavyLink color="#10cab7" to="/Portfolio">Portfolio</WavyLink >
            </li>
            <li>
              <WavyLink color="#10cab7" to="/About">About</WavyLink >
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function nav() {
  const nav = document.getElementById("links");

  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
