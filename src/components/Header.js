import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="pt-1 px-3 d-flex align-items-center justify-content-between">
        <h1 className="app-title">
          Giant Bomb <i className="fas fa-bomb"></i> Store
        </h1>
        <button className="my-cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="ml-1">0</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
