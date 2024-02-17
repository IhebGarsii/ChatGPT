import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h1 className="logo">GPT3</h1>

        <div className="nav">
          <a href="">Home</a>
          <a href="">What is GPT3</a>
          <a href="">Open AI</a>
          <a href="">Case Studies</a>
          <a href="">Library</a>
          <a href="">Home</a>
        </div>
      </div>
      <div className="right">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
