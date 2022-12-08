import React from "react";
import Logo from "../../components/Logo/Logo";
import Menubar from "../../components/MenuBar/Menubar";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Menubar />
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
