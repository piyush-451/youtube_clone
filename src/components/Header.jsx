import React from "react";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { Link } from "react-router-dom";
import "../styles/Header.css"

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </div>
  );
}

export default Header;
