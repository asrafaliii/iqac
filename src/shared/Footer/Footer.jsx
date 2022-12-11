import React from "react";
import logo from "../../assets/logo.png"
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaSkype } from "react-icons/fa";
import number1 from "../../assets/number1.jpg";
import number2 from "../../assets/number2.jpg";

const Footer = () => {
  return (
  <footer>
    <div className="footer">
    <div className="row">
      <div className="col address">
        <div>
          <img className="logo" src={logo}/>
        </div>
        <div>
          <h3>BANGLADESH UNIVERSITY OF PROFESSIONALS</h3>
          <p>Mirpur Cantonment, Dhaka-1216</p>
          <p>Phone: +8809666790790</p>
          <p>Fax: 88-028000443</p>
          <p>Email: info@bup.edu.bd</p>
        </div>
      </div>
      <div className="col">
        <ul>
          <li><a href="#">About the University</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Core Values</a></li>
          <li><a href="#">Objectives</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Research at BUP</a></li>
          <li><a href="#">Mphil & PhD Programs</a></li>
          <li><a href="#">Complete Research</a></li>
          <li><a href="#">Ongoing Research</a></li>
        </ul>
      </div>
      <div className="col">
        <div className="social-icon">
          <FaFacebookF className="icon"/>
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaSkype className="icon"/>

        </div>
        <div className="number">
          <img src={number1} />
          <img src={number2} />
        </div>
      </div>
    </div>
    </div>
    <div className="footer-bottom">
      <div><p>All rights Reserved &copy; BUP,2022</p></div>
      <div><p>Made with heart by <span>Nanosoft</span></p></div>
    </div>
  </footer>
  )
};

export default Footer;
