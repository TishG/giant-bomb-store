import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="pt-1 px-3 d-flex align-items-center justify-content-between">
        <h1 className="app-title">
          Giant Bomb <i class="fas fa-bomb"></i> Store
        </h1>
        <div className="my-cart" aria-role="button">
          <span class="fas fa-shopping-cart"></span>
          <span className="ml-1">0</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
