import React from "react";

export default function Home() {
  return (
    <div className="landing" onClick={() => block()}>
      <div className="center-text">
        <h1>Hello There</h1>
        <p>
          We are Leon Creative and Minimal <br /> Agency Web Template
        </p>
      </div>
    </div>
  );
}

function block() {
  const nav = document.getElementById("links");
  if (nav.style.display === "block") nav.style.display = "none";
}
