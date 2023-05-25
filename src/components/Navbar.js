import React, { useState } from "react";
// import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">loopstudios</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/about">ABOUT</a>
        <a href="/careers">CAREERS</a>
        <a href="/events">EVENTS</a>
        <a href="/products">PRODUCTS</a>
        <a href="/support">SUPPORT</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;