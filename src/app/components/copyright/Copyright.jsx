import React from "react";
import Link from "next/link";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-8">
            <div className="copyright-left">
              <ul className="mainmenu justify-content-start">
                <li>
                  <Link className="hover-flip-item-wrapper" href="">
                    <span className="hover-flip-item">
                      <span data-text="Contact Us">Contact Us</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="hover-flip-item-wrapper" href="">
                    <span className="hover-flip-item">
                      <span data-text="Privacy Policy">Privacy Policy</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="hover-flip-item-wrapper" href="">
                    <span className="hover-flip-item">
                      <span data-text="AdChoices">AdChoices</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="hover-flip-item-wrapper" href="">
                    <span className="hover-flip-item">
                      <span data-text="Advertise with Us">
                        Advertise with Us
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="hover-flip-item-wrapper" href="">
                    <span className="hover-flip-item">
                      <span data-text="Blogar Store">Blogar Store</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="copyright-right text-start text-md-end">
              <p>All Rights Reserved © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
