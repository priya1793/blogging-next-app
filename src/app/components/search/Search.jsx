"use client";

import React from "react";
import Image from "next/image";
import "./Search.css";
import useTheme from "@/app/context/useTheme";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { themeMode } = useTheme();

  return (
    <div className="form-group">
      <button type="submit" className="search-button">
        <FaSearch color={`${themeMode === "dark" ? "grey" : "black"}`} />
      </button>
      <input
        type="text"
        className={`form-control ${themeMode === "dark" ? "dark-input" : ""}`}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
