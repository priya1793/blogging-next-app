"use client";

import React from "react";
import Link from "next/link";
import "./Switcher.css";
import useTheme from "@/app/context/useTheme";

const Switcher = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChange = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div className="switcher">
      <ul>
        <li onClick={onChange}>
          <span className={`setColor ${themeMode === "light" ? "active" : ""}`}>
            <span title="Light Mode">Light</span>
          </span>
        </li>
        <li onClick={onChange}>
          <span className={`setColor ${themeMode === "dark" ? "active" : ""}`}>
            <span title="Dark Mode">Dark</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Switcher;
