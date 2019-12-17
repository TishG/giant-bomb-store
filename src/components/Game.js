import React from "react";
import "./Game.css";

const Game = ({ name, image, description, releaseDate, add }) => {
  return (
    <div className="game card p-1 d-flex flex-column justify-content-between align-items-center"> 
      <div className="card-body">
        <h5 className="card-title">{name || "null"}</h5>
        <p className="card-text text-secondary">{description || "null"}</p>
        <p className="card-text">Release Date: {releaseDate || "null"}</p>
      </div>
      <div className="game-card-top d-flex flex-column">
        <img src={image} className="card-img-top" alt={name} />
        <button onClick={(e) => add(name)}>
          <i className="fas fa-cart-plus text-primary"></i>
        </button>
      </div>
     </div> 
  );
};

export default Game;
