import React from "react";
import FooterMainMenu from "../footerMainMenu/FooterMainMenu";
import FooterTop from "../footerTop/FooterTop";
import Copyright from "../copyright/Copyright";

const Footer = () => {
  return (
    <div className="footer-area pb-5">
      <FooterMainMenu />
      <FooterTop />
      <Copyright />
    </div>
  );
};

export default Footer;
