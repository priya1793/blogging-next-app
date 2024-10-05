import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="logo">
              <Link href="">
                <h2 className="logo">Blogar</h2>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="d-flex justify-content-start justify-content-md-end align-items-center flex-wrap">
              <h5 className="follow-title">Follow Us</h5>
              <ul className="social-icon justify-content-start">
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
