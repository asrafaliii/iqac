import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/team">Team</a>
      <a href="/activity">Activity</a>
      <a href="/documents">Documents</a>
      <a href="/trainingworkshop">Traning & Workshop</a>
      <a href="/newsevent">News & Event</a>
      <a href="/contactus">Contact Us</a>
    </nav>
  );
};

export default Navbar;
