import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Search from "../search/Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h1 className="logo">Blogar</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Posts
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Post List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Post Archive
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Author Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Lifestyle
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Gadgets
              </a>
            </li>
          </ul>
          <form className="search">
            <Search />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
