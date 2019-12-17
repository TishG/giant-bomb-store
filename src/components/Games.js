import React from "react";
import "./Games.css";

//components
import Game from "./Game";

const Games = ({ loading, games, add }) => {
  console.log("GAMES", games);
  if (loading) {
    return (
      <div className="loading bg-dark text-white d-flex justify-content-center align-items-center">
        <h2 className="loader">Loading</h2>
      </div>
    );
  }
  return (
    <div className="games container">
      <ul>
        {games.map(game => (
          <Game
            add={add}
            key={game.name}
            name={game.name}
            image={game.image.thumb_url}
            description={game.deck}
            releaseDate={game.original_release_date}
          />
        ))}
      </ul>
    </div>
  );
};

export default Games;
