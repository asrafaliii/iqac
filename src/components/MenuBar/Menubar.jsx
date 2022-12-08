import React from "react";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar">
      <a href="dspace">DSpace</a>
      <a href="library">Library</a>
      <a href="paymentprocedure">Payment Procedure</a>
      <a href="facultymembers">Faculty Members</a>
      <a href="degreeverification">Degree Verification</a>
      <a href="/importantcontact">Important Contact</a>
      <a href="/applyonline">Apply Online</a>
    </div>
  );
};

export default Menubar;
