import React from "react";
import "./Home.css";

//components
import Header from "../components/Header";
import Games from "../components/Games";
import Search from "../components/Search";
import Pagination from "../components/Pagination";


const Home = ({
  cart,
  filter,
  loading,
  add,
  currentGames,
  games,
  gamesPerPage,
  paginate
}) => {
  return (
    <div className="home">
      <Header cartNumber={cart.length} />
      <Search filter={filter} />
      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={games.length}
        paginate={paginate}
      />
      <Games currentGames={currentGames} loading={loading} add={add} />
    </div>
  );
};

export default Home;
