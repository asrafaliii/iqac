import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header>
			<img className="logo" src={logo} />
			<nav ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/activity">Activity</Link>
      <Link to="/documents">Documents</Link>
      <Link to="/trainingworkshop">Traning & Workshop</Link>
      <Link to="/newsevent">News & Event</Link>
      <Link to="/contactus">Contact Us</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    // <nav className="navbar">
      // <Link to="/">Home</Link>
      // <Link to="/about">About</Link>
      // <Link to="/team">Team</Link>
      // <Link to="/activity">Activity</Link>
      // <Link to="/documents">Documents</Link>
      // <Link to="/trainingworkshop">Traning & Workshop</Link>
      // <Link to="/newsevent">News & Event</Link>
      // <Link to="/contactus">Contact Us</Link>
    // </nav>
  );
};

export default Navbar;
