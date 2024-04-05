import React from "react";
import airbnb from "/airbnb.svg";
import Search from "../Search";
import User from "../User";

const Header = () => {
  return (
    <header className="header flex items-center justify-between p-4 ">
      <a href="" className="header-logo flex items-center gap-1">
        <img src={airbnb} alt="logo airbnb" />
        <span className="font-bold text-xl">airbnb</span>
      </a>
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
