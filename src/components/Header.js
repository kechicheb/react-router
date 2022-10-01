import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
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
