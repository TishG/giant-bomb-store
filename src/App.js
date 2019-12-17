import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//views
import Home from "./views/Home";
import Cart from "./views/Cart";

//replace API_KEY with your API Key
let API = API_KEY;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [unfilteredGames, setUnfilteredGames] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.giantbomb.com/api/games/?api_key=${API}&field_list=name,deck,original_release_date,image&format=json&offset=${offset}`
      );
      setGames(response.data.results);
      setUnfilteredGames(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const filterGames = value => {
    if (value.trim() === "") {
      return setGames(unfilteredGames);
    }
    let filteredGames = games.filter(
      game =>
        game.name
          .trim()
          .toLowerCase()
          .indexOf(value.trim().toLowerCase()) !== -1
    );
    setGames(filteredGames);
  };

  const addToCart = name => {
    let foundGame = games.find(game => game.name === name);
    let newCart = [...cart, foundGame];
    setCart(newCart);
  };

  const clearCart = () => {
    return setCart([]);
  };

  //Get current posts
  const indexOfLastGame = currentPage * gamesPerPage; //5
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; //0
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  //Change page method
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // gamesPerPage={gamesPerPage}
  // totalGames={games.length}
  // paginate={paginate}
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                loading={loading}
                games={games}
                cart={cart}
                error={error}
                offset={offset}
                currentPage={currentPage}
                add={addToCart}
                filter={filterGames}
                currentGames={currentGames}
                paginate={paginate}
                gamesPerPage={gamesPerPage}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={props => <Cart cart={cart} clear={clearCart} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
