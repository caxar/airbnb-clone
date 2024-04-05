import React from "react";
import airbnb from "/airbnb.svg";
import Search from "../Search";
import User from "../User";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="header flex items-center justify-between
     p-4 container mx-auto px-10 border-b  border-gray-200 "
    >
      <Link to="/" className="header-logo flex items-center gap-1">
        <img src={airbnb} alt="logo airbnb" />
        <span className="font-bold text-primary text-2xl">airbnb</span>
      </Link>
      <div className="header-search">
        <Search />
      </div>
      <div className="header-controls">
        <User />
      </div>
    </header>
  );
};

export default Header;
