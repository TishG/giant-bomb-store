import React from "react";
import "./Games.css";

//components
import Game from "./Game";

const Games = ({ loading, games }) => {
  console.log("GAMES", games);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="games">
      <ul>
        {games.map(game => (
          <Game
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
